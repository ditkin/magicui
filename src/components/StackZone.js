import React from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'
import { List } from 'immutable'

import { ItemTypes } from '../constants'
import { DropTarget } from 'react-dnd'

import Card from './Card'
import CardModel from '../models/Card'
import PlaceholderCard from './PlaceholderCard'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as GameActions from '../redux/actions/GameActions'
import Destinations from './Destinations'
import withModal from '../hocs/withModal'

const zoneTarget = {
  drop({ moveCardTo, moveCardFrom, area, id, zoneNumber }, monitor) {
    const { area: fromArea, card: cardData } = monitor.getItem()
    const card = cardData.set('faceDown', false)

    if (fromArea && area) {
      moveCardFrom(fromArea, { id, card })
      moveCardTo(area, { id, card, zoneNumber })
    }
  },

  // hover(props, monitor, component) {
  //   if (!monitor.getItem().card.faceDown) {
  //     component.openModal()
  //   }
  // },
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
})

const StackZone = CreateReactClass({
  propTypes: {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    area: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    me: PropTypes.bool.isRequired,
    cards: PropTypes.instanceOf(List).isRequired,
    moveCardFrom: PropTypes.func.isRequired,
    moveCardTo: PropTypes.func.isRequired,
    destinations: PropTypes.instanceOf(List).isRequired,
    visible: PropTypes.bool,
  },

  renderVisibleCard() {
    const { cards, id, me, area, visible } = this.props

    const hasCards = cards.size > 0
    const cardData = cards.last() || new CardModel()
    const faceDown = !hasCards || !visible
    const card = cardData.set('faceDown', faceDown)

    return <Card id={id} me={me} card={card} area={area} immobile={!hasCards} />
  },

  render() {
    const {
      openModal,
      connectDropTarget,
      isOver,
      area,
      me,
      destinations,
      cards,
      id,
    } = this.props

    const classes = classNames('zone', area, { me, isOver })

    return connectDropTarget(
      <div
        className={classes}
        onClick={() => openModal({ destinations, me, id, area })}
      >
        {this.renderVisibleCard()}
      </div>
    )
  },
})

export default compose(
  withModal(Destinations),
  connect(
    () => ({}),
    {
      ...GameActions,
    }
  ),
  DropTarget(ItemTypes.CARD, zoneTarget, collect)
)(StackZone)
