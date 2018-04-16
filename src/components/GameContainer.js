import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import * as RoomActions from '../redux/actions/RoomActions'
import * as GameActions from '../redux/actions/GameActions'
import PlayerContainer from './PlayerContainer'

const Game = CreateReactClass({
  propTypes: {
    updateGameState: PropTypes.func.isRequired,
    game: PropTypes.instanceOf(Map).isRequired,
    userId: PropTypes.number.isRequired,
    opponentId: PropTypes.number.isRequired,
  },

  componentDidMount() {
    const { createGame, updateGameState } = this.props
    setInterval(() => updateGameState(), 1000)
  },

  render() {
    const { game, userId, opponentId } = this.props

    return (
      <div>
        <PlayerContainer id={opponentId} me={false} />
        <PlayerContainer id={userId} me={true} />
      </div>
    )
  },
})

const ConnectedGame = connect(state => ({
  game: state.game,
  userId: state.user.id,
  opponentId: state.opponent.id,
}), {
  ...GameActions,
  ...RoomActions,
})(Game)

export default DragDropContext(HTML5Backend)(ConnectedGame)