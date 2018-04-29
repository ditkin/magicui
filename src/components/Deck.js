import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'
import { List } from 'immutable'

import CardModel from '../models/Card'
import Card from './Card'
import StackZone from './StackZone'

export default CreateReactClass({
	propTypes: {
    id: PropTypes.number.isRequired,
		me: PropTypes.bool.isRequired,
		cards: PropTypes.instanceOf(List).isRequired,
    moveCardFrom: PropTypes.func.isRequired,
    moveCardTo: PropTypes.func.isRequired,
	},

	maybeRenderWholeDeck() {
		const { me } = this.props

		if (me) {
			alert('jaja!')
		}
	},

  render() {
    const { id, me, cards, moveCardFrom, moveCardTo } = this.props

    const classes = classNames('deck', { me })
    const destinations = List([ 'hand', 'field', 'grave' ])

    return (
      <StackZone
        area="deck"
        id={id}
        me={me}
        cards={cards}
        moveCardFrom={moveCardFrom}
        moveCardTo={moveCardTo}
        destinations={destinations}
      />
    )
  },
})
