import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { List } from 'immutable'
import * as GameActions from '../redux/actions/GameActions'
import Field from './Field'
import Hand from './Hand'
import Deck from './Deck'
import Grave from './Grave'
import { getDeck, getField, getGrave, getHand } from '../redux/selectors/board'
import UIFlex from './UIFlex'

const Player = ({ id, me, deck, field, grave, hand }) => {
  const hasId = id !== undefined
  // This container should only display once there are cards
  if (!hasId || !deck) {
    return null
  }

  return (
    <div className="player">
      <UIFlex direction="column" swap={!me}>
        <Field id={id} me={me} cards={field} />
        <Hand id={id} me={me} cards={hand} />
      </UIFlex>
      <UIFlex direction="column" swap={!me} width="100px">
        <Grave id={id} me={me} cards={grave} />
        <Deck id={id} me={me} cards={deck} />
      </UIFlex>
    </div>
  )
}

Player.propTypes = {
  id: PropTypes.number.isRequired,
  me: PropTypes.bool.isRequired,
  deck: PropTypes.instanceOf(List).isRequired,
  field: PropTypes.instanceOf(List).isRequired,
  grave: PropTypes.instanceOf(List).isRequired,
  hand: PropTypes.instanceOf(List).isRequired,
}

export default connect(
  (state, props) => ({
    deck: getDeck(props.id)(state),
    field: getField(props.id)(state),
    grave: getGrave(props.id)(state),
    hand: getHand(props.id)(state),
  }),
  {
    ...GameActions,
  }
)(Player)
