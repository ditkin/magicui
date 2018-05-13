import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'
import { List } from 'immutable'

import CardZone from './CardZone'

export default CreateReactClass({
  propTypes: {
    id: PropTypes.number.isRequired,
    me: PropTypes.bool.isRequired,
    cards: PropTypes.instanceOf(List).isRequired,
    moveCardFrom: PropTypes.func.isRequired,
    moveCardTo: PropTypes.func.isRequired,
  },

  maybeFlipCards(me, cards) {
    return cards.map(card => card.set('faceDown', !me))
  },

  render() {
    const { id, me, cards, moveCardFrom, moveCardTo } = this.props
    const maybeFlippedCards = this.maybeFlipCards(me, cards)
    return (
      <CardZone
        id={id}
        me={me}
        area="hand"
        cards={maybeFlippedCards}
        moveCardFrom={moveCardFrom}
        moveCardTo={moveCardTo}
      />
    )
  },
})
