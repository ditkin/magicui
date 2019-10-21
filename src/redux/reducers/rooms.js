import { handleActions } from 'redux-actions'
import ActionTypes from '../actions/ActionTypes'
import { List } from 'immutable'
import Room from '../../models/Room'

export default handleActions(
  {
    [ActionTypes.ROOMS_UPDATED]: (rooms, action) =>
      List(action.payload).map(Room.from),
  },
  List()
)
