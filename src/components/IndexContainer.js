import { hot } from 'react-hot-loader/root'
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import * as RoomActions from '../redux/actions/RoomActions'
import * as GameActions from '../redux/actions/GameActions'
import WaitingRoomContainer from './WaitingRoomContainer'
import GameContainer from './GameContainer'

const IndexContainer = ({ updateGameState, game, userId, opponentId }) => {
  if (!isNaN(userId) && isNaN(opponentId)) {
    return <WaitingRoomContainer />
  }
  return <GameContainer />
}

IndexContainer.propTypes = {
  userId: PropTypes.number.isRequired,
  opponentId: PropTypes.number.isRequired,
}

export default compose(
  hot,
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
)(IndexContainer)
