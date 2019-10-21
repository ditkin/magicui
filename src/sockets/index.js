import ActionTypes from '../redux/actions/ActionTypes'
import { receiveGameUpdate } from '../redux/actions/GameActions'
import {
  selfAwaken,
  challengerAppears,
  roomJoined,
  roomCreated,
  roomLeft,
  roomsUpdated,
} from '../redux/actions/RoomActions'

let _socket
let _dispatch

export function initSocket(dispatch) {
  // const socket = new WebSocket('ws://agnosticard-api.herokuapp.com/:1234')
  _socket = new WebSocket('ws://localhost:1234')
  _dispatch = dispatch

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
        // alert(`found first user (id: ${data.id})`)
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
