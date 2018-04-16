import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'

import { ItemTypes } from '../constants'
import { DropTarget } from 'react-dnd'

import CardModel from '../models/Card'
import Card from './Card'

const zoneTarget = {
  drop(props, monitor) {
    props.moveCard(props.id, props.card, props.area, props.zoneNumber, props.me)
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
})

const Zone = CreateReactClass({
  propTypes: {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    moveCard: PropTypes.func.isRequired,
    zoneNumber: PropTypes.number.isRequired,
    area: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    me: PropTypes.bool.isRequired,
    card: PropTypes.instanceOf(CardModel).isRequired,
  },

  render() {
    const { connectDropTarget, isOver, me, card } = this.props

    const classes = classNames('zone', { me, isOver })

    return connectDropTarget(
      <div className={classes}>
        <Card card={card} me={me} immobile={false} />
      </div>
    )
  },
})

export default DropTarget(ItemTypes.CARD, zoneTarget, collect)(Zone)