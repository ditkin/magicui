import ActionTypes from '../redux/actions/ActionTypes'
import { receiveGameUpdate } from '../redux/actions/GameActions'
import { selfAwaken, challengerAppears } from '../redux/actions/RoomActions'

export default dispatch => {
  const socket = new WebSocket('ws://localhost:2345')

  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        type: ActionTypes.JOIN_GAME,
        id: 123,
      })
    )
  }
  socket.onmessage = event => {
    const data = JSON.parse(event.data)
    switch (data.type) {
      case ActionTypes.GAME_UPDATED:
        dispatch(receiveGameUpdate(data))
        break
      // these actions have not been made yet. the BE now
      // sends messages like these. lets set IDs (opponent on GAME START)
      case 'WAITING_ROOM':
        alert(`found first user (id: ${data.id})`)
        dispatch(selfAwaken(data.id))
        break
      case 'GAME_START':
        alert(`found opponent (id: ${data.opponent.id})`)
        dispatch(challengerAppears(data.opponent.id))
        break
      case 'OPPONENT_DISCONNECTED':
      //temporary suspend  & wait
      case 'MESSAGE':
      default:
        console.log('message')
    }
  }
  return socket
}
