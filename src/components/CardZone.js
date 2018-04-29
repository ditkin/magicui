import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'
import { List } from 'immutable'

import { ItemTypes } from '../constants'

import Zone from './Zone'
import Card from './Card'
import PlaceholderCard from './PlaceholderCard'

export default CreateReactClass({
  propTypes: {
    id: PropTypes.number.isRequired,
    me: PropTypes.bool.isRequired,
    area: PropTypes.string.isRequired,
    cards: PropTypes.instanceOf(List).isRequired,
    moveCardFrom: PropTypes.func.isRequired,
    moveCardTo: PropTypes.func.isRequired,
    onDrag: PropTypes.func,
    classes: PropTypes.string,
  },

  isTurnable(me, area) {
    return area === 'hand' ? false : me
  },

  renderCards() {
    const { id, me, cards, area, moveCardFrom, moveCardTo, onDrag } = this.props

    if (cards.size === 0) {
      return <PlaceholderCard />
    }

    const turnable = this.isTurnable(me, area)

    // TODO make areas constants
    return cards.map((card, index) => (
      <Card
        id={id}
        me={me}
        area={area}
        zoneNumber={index}
        card={card}
        turnable={turnable}
        moveCardFrom={moveCardFrom}
        moveCardTo={moveCardTo}
        onDrag={onDrag}
      />
    ))
  },

  render() {
    const {
      classes,
      id,
      me,
      area,
      moveCardFrom,
      moveCardTo,
      onDrag,
    } = this.props

    const zoneClasses = classes || classNames(area)

    return (
      <Zone
        classes={zoneClasses}
        id={id}
        me={me}
        area={area}
        moveCardFrom={moveCardFrom}
        moveCardTo={moveCardTo}
        onDrag={onDrag}
      >
        {this.renderCards()}
      </Zone>
    )
  },
})
