import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'

import Player from '../models/Player'
import Field from './Field'
import Hand from './Hand'
import Deck from './Deck'
import Grave from './Grave'

export default CreateReactClass({
  propTypes: {
    me: PropTypes.bool.isRequired,
    player: PropTypes.instanceOf(Player).isRequired,
  },

  render() {
    const { me, player } = this.props
    const { field, hand, deck, grave } = player
    return (
      <div>
      <Field me={me} cards={field} />
      <Hand me={me} cards={hand} />
      <Deck me={me} cards={deck} />
      <Grave me={me} cards={grave} />
      </div>
    )
  }
})

