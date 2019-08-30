import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ItemTypes } from '../constants'
import { DragSource } from 'react-dnd'

import CardModel from '../models/Card'
import { compose } from 'redux'
import { connect as reduxConnect } from 'react-redux'
import * as GameActions from '../redux/actions/GameActions'

const cardSource = {
  beginDrag({ area, onDrag, card, id }) {
    onDrag && onDrag()

    return { area, card, id }
  },

  canDrag({ immobile, me }) {
    return !immobile && me
  },
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
})

const Card = ({
  connectDragSource,
  isDragging,
  area,
  me,
  id,
  card,
  turnable,
  immobile,
}) => {
  const displayName = card.faceDown ? null : card.name

  const [sideways, setSideways] = useState(false)

  const [targeted, setTargeted] = useState(false)

  const handleClick = useCallback(() => {
    const manipulable = me && turnable
    if (manipulable) {
      setSideways(!sideways)
    }
    if (!me) {
      setTargeted(true)
    }
  }, [setTargeted, sideways, setSideways])

  const classes = classNames('card', {
    upsideDown: !me,
    faceDown: card.faceDown,
    sideways,
    isDragging,
    targeted,
  })

  return connectDragSource(
    <div className={classes} onClick={handleClick}>
      {displayName}
    </div>
  )
}

Card.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  area: PropTypes.string.isRequired,
  me: PropTypes.bool.isRequired,
  id: PropTypes.number,
  card: PropTypes.instanceOf(CardModel).isRequired,
  turnable: PropTypes.bool,
  immobile: PropTypes.bool,
}

export default compose(
  reduxConnect(() => ({}), {
    ...GameActions,
  }),
  DragSource(ItemTypes.CARD, cardSource, collect)
)(Card)
