import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'immutable'

import CardZone from './CardZone'

const Hand = ({ id, me, cards }) => {
  const maybeFlippedCards = cards.map(card => card.set('faceDown', !me))

  return <CardZone id={id} me={me} area="hand" cards={maybeFlippedCards} />
}

Hand.propTypes = {
  id: PropTypes.number.isRequired,
  me: PropTypes.bool.isRequired,
  cards: PropTypes.instanceOf(List).isRequired,
}
export default Hand
