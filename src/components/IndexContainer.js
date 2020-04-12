import { hot } from 'react-hot-loader/root'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as RoomActions from '../redux/actions/RoomActions'
import * as GameActions from '../redux/actions/GameActions'
import WaitingRoomContainer from './WaitingRoomContainer'
import GameContainer from './GameContainer'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { API_BASE_URL } from '../constants'

const IndexContainer = ({ updateGameState, game, userId, opponentId }) => {
  fetch(API_BASE_URL)
    .then(response => response.text())
    .then(data => {
      console.log(data)
    })
    .catch(e => console.log(e))

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
)(IndexContainer)
