import ActionTypes from '../redux/actions/ActionTypes'
import { receiveGameUpdate } from '../redux/actions/GameActions'
import {
  selfAwaken,
  challengerAppears,
  roomJoined,
  roomLeft,
  roomsUpdated,
} from '../redux/actions/RoomActions'

let _socket

export function initSocket(dispatch) {
  _socket = new WebSocket('ws://agnosticard-api.herokuapp.com')
  // _socket = new WebSocket('ws://localhost:1234')

  _socket.onopen = () => {
    _socket.send(
      JSON.stringify({
        type: ActionTypes.REGISTER,
      })
    )
  }
  _socket.onmessage = event => {
    const data = JSON.parse(event.data)
    switch (data.type) {
      case ActionTypes.GAME_UPDATED:
        dispatch(receiveGameUpdate(data))
        break
      case 'REGISTERED':
        dispatch(selfAwaken(data.user.id))
        dispatch(roomsUpdated(data.rooms))
        break
      case ActionTypes.ROOM_LEFT:
        dispatch(roomLeft())
        break
      case ActionTypes.ROOMS_UPDATED:
        dispatch(roomsUpdated(data.rooms))
        break
      case 'ROOM_JOINED':
        dispatch(roomJoined(data.room))
        break
      case 'GAME_START':
        dispatch(challengerAppears(data.opponentId))
        break
      case 'OPPONENT_DISCONNECTED':
      //temporary suspend  & wait
      case 'MESSAGE':
      default:
        console.log('message', data)
    }
  }
}

export function sendMessage(message) {
  _socket.send(JSON.stringify(message))
}
