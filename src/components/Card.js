import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'
import { ItemTypes } from '../constants'
import { DragSource } from 'react-dnd'

import CardModel from '../models/Card'

const cardSource = {
  beginDrag({ area, onDrag, card }) {
    onDrag && onDrag()

    return { area, card }
  },

  canDrag({ me }) {
    return me
  },
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
})

const Card = CreateReactClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    me: PropTypes.bool.isRequired,
    card: PropTypes.instanceOf(CardModel).isRequired,
    area: PropTypes.string.isRequired,
    turnable: PropTypes.bool,
  },

  getInitialState() {
    return {
      sideways: false,
    }
  },

  handleClick() {
    this.setState((state, { me, turnable }) => {
      const manipulable = me && turnable
      if (manipulable) {
        return { sideways: !state.sideways }
      }
      if (me) {
        return null
      }

      return { targeted: true }
    })
  },

  getDisplayName({ faceDown, name }) {
    return faceDown ? null : name
  },

  render() {
    const { sideways } = this.state
    const { connectDragSource, isDragging, me, card } = this.props

    const classes = classNames('card', {
      upsideDown: !me,
      faceDown: card.faceDown,
      sideways,
      isDragging,
    })

    return connectDragSource(
      <div className={classes} onClick={this.handleClick}>
        {this.getDisplayName(card)}
      </div>
    )
  },
})

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card)
