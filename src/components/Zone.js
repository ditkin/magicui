import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'
import { List } from 'immutable'

import { ItemTypes } from '../constants'
import { DropTarget } from 'react-dnd'

import CardModel from '../models/Card'
import Card from './Card'

const zoneTarget = {
  drop({ moveCardTo, moveCardFrom, area, id, zoneNumber }, monitor) {
    const { area: fromArea, card } = monitor.getItem()

    if (fromArea && area) {
      moveCardFrom(fromArea, { id, card })
      moveCardTo(area, { id, card, zoneNumber })
    }
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
    zoneNumber: PropTypes.number.isRequired,
    area: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    me: PropTypes.bool.isRequired,
    moveCardFrom: PropTypes.func.isRequired,
    moveCardTo: PropTypes.func.isRequired,
  },

  render() {
    const {
      connectDropTarget,
      isOver,
      children,
      id,
      me,
      area,
      moveCardFrom,
      classes,
    } = this.props

    const zoneClasses = classNames(`${classes} zone`, { me, isOver })

    return connectDropTarget(
      <div className={zoneClasses}>
        {children}
      </div>
    )
  },
})

export default DropTarget(ItemTypes.CARD, zoneTarget, collect)(Zone)