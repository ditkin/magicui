import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import { connect } from 'react-redux'
import { List } from 'immutable'

import * as GameActions from '../redux/actions/GameActions'
import Field from './Field'
import Hand from './Hand'
import Deck from './Deck'
import Grave from './Grave'
import {
  getDeck,
  getField,
  getGrave,
  getHand,
} from '../redux/selectors/board'

const Player = CreateReactClass({
  propTypes: {
    moveCard: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    me: PropTypes.bool.isRequired,
    deck: PropTypes.instanceOf(List).isRequired,
    field: PropTypes.instanceOf(List).isRequired,
    grave: PropTypes.instanceOf(List).isRequired,
    hand: PropTypes.instanceOf(List).isRequired,
  },

  render() {
    const { moveCard, id, me, deck, field, grave, hand } = this.props
    return (
      <div className="player">
        <Field id={id} me={me} moveCard={moveCard} cards={field} />
        <div className="collapsed-cards">
           <Grave id={id} me={me} cards={grave} />
           <Deck id={id} me={me} cards={deck} />
        </div>
        <Hand id={id} me={me} cards={hand} />
      </div>
    )
  }
})

export default connect((state, props) => ({
  deck: getDeck(props.id)(state),
  field: getField(props.id)(state),
  grave: getGrave(props.id)(state),
  hand: getHand(props.id)(state),
}), {
  ...GameActions,
})(Player)