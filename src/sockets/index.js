import ActionTypes from '../redux/actions/ActionTypes'
import { receiveGameUpdate, chatSent } from '../redux/actions/GameActions'
import {
  selfAwaken,
  challengerAppears,
  roomJoined,
  roomLeft,
  roomsUpdated,
} from '../redux/actions/RoomActions'

let _socket

const LOCAL_SOCKET_URL = 'ws://localhost:1234'
const PROD_SOCKET_URL = 'ws://agnosticard-api.herokuapp.com'

function getSocketUrl() {
  const isLocal = window.location.href.includes('localhost')
  return isLocal ? LOCAL_SOCKET_URL : PROD_SOCKET_URL
}

export function initSocket(dispatch) {
  _socket = new WebSocket(getSocketUrl())

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
      case ActionTypes.CHAT_SENT:
        dispatch(chatSent(data.chat))
        break
      case ActionTypes.REGISTERED:
        dispatch(selfAwaken(data.user.id))
        dispatch(roomsUpdated(data.rooms))
        break
      case ActionTypes.ROOM_LEFT:
        dispatch(roomLeft())
        break
      case ActionTypes.ROOMS_UPDATED:
        dispatch(roomsUpdated(data.rooms))
        break
      case ActionTypes.ROOM_JOINED:
        dispatch(roomJoined(data.room))
        break
      case ActionTypes.GAME_START:
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
