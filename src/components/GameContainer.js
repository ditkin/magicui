import { hot } from 'react-hot-loader/root'
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import * as RoomActions from '../redux/actions/RoomActions'
import * as GameActions from '../redux/actions/GameActions'
import PlayerContainer from './PlayerContainer'

const Game = ({ updateGameState, game, userId, opponentId }) => {
  return (
    <Fragment>
      <PlayerContainer id={opponentId} me={false} />
      <PlayerContainer id={userId} me={true} />
    </Fragment>
  )
}

Game.propTypes = {
  updateGameState: PropTypes.func.isRequired,
  game: PropTypes.instanceOf(Map).isRequired,
  userId: PropTypes.number.isRequired,
  opponentId: PropTypes.number.isRequired,
}

export default compose(
  hot,
  DragDropContext(HTML5Backend),
  connect(
    state => ({
      userId: state.user.id,
      opponentId: state.opponent.id,
    }),
    {
      ...GameActions,
      ...RoomActions,
    }
  )
)(Game)
