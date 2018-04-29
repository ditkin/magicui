import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'
import { ItemTypes } from '../constants'
import { DragSource } from 'react-dnd'

import CardModel from '../models/Card'

const cardSource = {
  beginDrag({ area, card, onDrag }) {
    if (onDrag) onDrag()
    return { area, card }
  },

  canDrag({ me, immobile }) {
    return me && !immobile
  },
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
})

const Card = CreateReactClass({
	propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
		me: PropTypes.bool.isRequired,
		card: PropTypes.instanceOf(CardModel).isRequired,
    area: PropTypes.string.isRequired,
    immobile: PropTypes.bool,
	},

  getInitialState() {
    return {
      sideways: false,
    }
  },

  handleClick() {
    // TODO: reactDnD can tell apart click and drag?
    this.setState((state, props) => {
      const manipulable = props.me && !props.immobile
      return manipulable
        ? { sideways: !state.sideways }
        : { targeted: true }
    })
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
      <div
      	className={classes}
        onClick={this.handleClick}
      >
      	{card.name}
      </div>
    )
  }
})

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card)
