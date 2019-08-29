import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { List } from 'immutable'

import { ItemTypes } from '../constants'
import { DropTarget } from 'react-dnd'

import CardModel from '../models/Card'
import Card from './Card'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as GameActions from '../redux/actions/GameActions'

const zoneTarget = {
  drop({ moveCardTo, moveCardFrom, area, id: toId, zoneNumber }, monitor) {
    const { area: fromArea, card: cardData, id: fromId } = monitor.getItem()
    const card = cardData.set('faceDown', false)

    if (fromArea && area) {
      moveCardFrom(fromArea, { id: fromId, card })
      moveCardTo(area, { id: toId, card, zoneNumber })
    }
  },
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
})

const Zone = ({
  connectDropTarget,
  isOver,
  zoneNumber,
  area,
  id,
  me,
  moveCardFrom,
  moveCardTo,
  children,
  classes,
}) => {
  const zoneClasses = classNames(`${classes} zone`, { me, isOver })

  return connectDropTarget(<div className={zoneClasses}>{children}</div>)
}

Zone.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  zoneNumber: PropTypes.number.isRequired,
  area: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  me: PropTypes.bool.isRequired,
  moveCardFrom: PropTypes.func.isRequired,
  moveCardTo: PropTypes.func.isRequired,
}

export default compose(
  DropTarget(ItemTypes.CARD, zoneTarget, collect),
  connect(
    () => ({}),
    {
      ...GameActions,
    }
  )
)(Zone)
