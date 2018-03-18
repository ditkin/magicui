import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'
import { List } from 'immutable'

import CardModel from '../models/Card'
import Card from './Card'

export default CreateReactClass({
	propTypes: {
		me: PropTypes.bool.isRequired,
		cards: PropTypes.instanceOf(List).isRequired,
	},

	maybeRenderWholeDeck() {
		const { me } = this.props

		if (me) {
			alert('jaja!')
		}
	},

	renderWholeDeck() {
		const { me, cards } = this.props

		return cards.map(card => (
			<Card card={card} me={me} />
		))
	},

  render() {
    const { me } = this.props

    const classes = classNames('deck', { me })
    const card = CardModel.from({ faceDown: true })

    return (
      <div
      	className={classes}
      	onClick={this.maybeRenderWholeDeck}
      >
      	<Card card={card} me={me} immobile={true} />
      </div>
    )
  },
})
