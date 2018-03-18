import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'

import Card from '../models/Card'

export default CreateReactClass({
	propTypes: {
		me: PropTypes.bool.isRequired,
		card: PropTypes.instanceOf(Card).isRequired,
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
    const { me, card } = this.props

    const classes = classNames('card', {
    	upsideDown: !me,
      faceDown: card.faceDown,
      sideways,
    })

    return (
      <div
      	className={classes}
        onClick={this.handleClick}
      >
      	{card.name}
      </div>
    )
  }
})
