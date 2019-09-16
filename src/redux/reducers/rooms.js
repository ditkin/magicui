import { handleActions } from 'redux-actions'
import ActionTypes from '../actions/ActionTypes'
import { List } from 'immutable'
import Room from '../../models/Room'

export default handleActions(
  {
    [ActionTypes.SET_ROOMS]: (rooms, action) => List(action.payload),
    [ActionTypes.ROOM_CREATED]: (rooms, action) =>
      rooms.push(Room.from(action.payload)),
  },
  List()
)
