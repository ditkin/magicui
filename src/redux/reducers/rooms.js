import { handleActions } from 'redux-actions'
import ActionTypes from '../actions/ActionTypes'
import { List } from 'immutable'
import Room from '../../models/Room'

export default handleActions(
  {
    [ActionTypes.SET_ROOMS]: (rooms, action) => List(action.rooms),
    [ActionTypes.ROOM_CREATED]: (rooms, room) => rooms.push(Room.from(room)),
  },
  List()
)
