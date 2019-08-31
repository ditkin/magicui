import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'immutable'

import CardZone from './CardZone'
import { getField } from '../redux/selectors/board'

const Field = ({ id, me, cards }) => (
  <CardZone area="field" id={id} me={me} cards={cards} />
)

Field.propTypes = {
  id: PropTypes.number.isRequired,
  me: PropTypes.bool.isRequired,
  cards: PropTypes.instanceOf(List).isRequired,
}

export default Field
