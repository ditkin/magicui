import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'
import { ItemTypes } from '../constants'
import { DragSource } from 'react-dnd'

import CardModel from '../models/Card'
import { compose } from 'redux'
import { connect } from 'react-redux'
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

const Card = CreateReactClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    area: PropTypes.string.isRequired,
    me: PropTypes.bool.isRequired,
    id: PropTypes.number,
    card: PropTypes.instanceOf(CardModel).isRequired,
    turnable: PropTypes.bool,
    immobile: PropTypes.bool,
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

export default compose(
  DragSource(ItemTypes.CARD, cardSource, collect),
  connect(
    () => ({}),
    {
      ...GameActions,
    }
  )
)(Card)
