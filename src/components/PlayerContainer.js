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
    id: PropTypes.number.isRequired,
    me: PropTypes.bool.isRequired,
    deck: PropTypes.instanceOf(List).isRequired,
    field: PropTypes.instanceOf(List).isRequired,
    grave: PropTypes.instanceOf(List).isRequired,
    hand: PropTypes.instanceOf(List).isRequired,
    moveCardFrom: PropTypes.func.isRequired,
    moveCardTo: PropTypes.func.isRequired,
  },

  render() {
    const { id, me, deck, field, grave, hand, moveCardFrom, moveCardTo } = this.props
    if (!deck || deck.size === 0) {
      return null
    }

    return (
      <div className="player">
        <Field id={id} me={me} cards={field} moveCardFrom={moveCardFrom} moveCardTo={moveCardTo} />
        <div className="collapsed-cards">
           <Grave id={id} me={me} cards={grave} />
           <Deck id={id} me={me} cards={deck} />
        </div>
        <Hand id={id} me={me} cards={hand} moveCardFrom={moveCardFrom} moveCardTo={moveCardTo} />
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