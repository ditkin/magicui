import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import { connect } from 'react-redux'

import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import { updateGameState } from '../redux/actions/GameActions'
import PlayerContainer from './PlayerContainer'
import Player from '../models/Player'

const GameContainer = CreateReactClass({
  propTypes: {
    player1: PropTypes.instanceOf(Player).isRequired,
    player2: PropTypes.instanceOf(Player).isRequired,
  },

  componentDidMount() {
    setInterval(
      () => this.props.dispatch(updateGameState()),
      1000
    )
  },

  render() {
    const { dispatch, player1, player2 } = this.props
    return (
      <div>
        <PlayerContainer dispatch={dispatch} me={false} player={player1} />
        <PlayerContainer dispatch={dispatch} me={true} player={player2} />
      </div>
    )
  },
})

const ConnectedGame = connect(state => ({
  dispatch: PropTypes.func.isRequired,
  player1: state.player1,
  player2: state.player2,
}))(GameContainer)

export default DragDropContext(HTML5Backend)(ConnectedGame)