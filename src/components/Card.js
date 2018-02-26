import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'

import Card from '../models/Card'

export default CreateReactClass({
	propTypes: {
		me: PropTypes.bool.isRequired,
		card: PropTypes.instanceOf(Card).isRequired,
	},

  render() {
    const { me, card } = this.props

    const classes = classNames('card', {
    	upsideDown: !me,
    })

    return (
      <div
      	className={classes}
      	draggable={me}
      >
      	{card.name}
      </div>
    )
  }
})
