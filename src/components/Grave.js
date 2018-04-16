import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'
import { List } from 'immutable'

import CardModel from '../models/Card'
import Zone from './Zone'
import Card from './Card'

export default CreateReactClass({
	propTypes: {
		me: PropTypes.bool.isRequired,
		cards: PropTypes.instanceOf(List).isRequired,
	},

	renderCards() {
		const { cards, me } = this.props

		return cards.map((card, index) => (
			<Zone key={index} card={card} me={me}/>
		))
	},

  render() {
    const { me } = this.props
    const classes = classNames('grave', { me })
    const card = CardModel.from({ faceDown: true })
    return (
      <div className={classes}>
      	<Card card={card} me={me} immobile={true} />
      </div>
    )
  }
})