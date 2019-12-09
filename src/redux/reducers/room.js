import { handleActions } from 'redux-actions'
import ActionTypes from '../actions/ActionTypes'
import Room from '../../models/Room'

export default handleActions(
  {
    [ActionTypes.CHAT_SENT]: (state, { payload: chat }) =>
      state.set('chat', chat),
    [ActionTypes.ROOM_LEFT]: () => new Room(),
    [ActionTypes.ROOM_JOINED]: (_, action) => Room.from(action.payload),
  },
  new Room()
)
