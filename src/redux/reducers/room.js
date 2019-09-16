import { handleActions } from 'redux-actions'
import ActionTypes from '../actions/ActionTypes'
import Room from '../../models/Room'

export default handleActions(
  {
    [ActionTypes.CREATE_GAME]: () => {},
    [ActionTypes.JOIN_GAME]: () => {},
    [ActionTypes.ROOM_JOINED]: (_, action) => Room.from(action.payload),
    [ActionTypes.START_GAME]: () => {
      opponentId: 456
    },
  },
  {}
)
