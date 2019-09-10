import { handleActions } from 'redux-actions'
import ActionTypes from '../actions/ActionTypes'
import Room from '../../models/Room'

export default handleActions(
  {
    [ActionTypes.CREATE_GAME]: () => {},
    [ActionTypes.JOIN_GAME]: () => {},
    [ActionTypes.ROOM_JOINED]: (_, room) => Room.from(room),
    [ActionTypes.START_GAME]: () => {
      opponentId: 456
    },
  },
  {}
)
