import { handleActions } from 'redux-actions'
import Player from '../../models/Player'
import ActionTypes from '../actions/ActionTypes'

const initialState = new Player()

export default handleActions(
  {
    [ActionTypes.GAME_UPDATED](player, action) {
      return Player.from(action.payload)
    },
    [ActionTypes.MOVE_CARD](player, action) {
      return player.setIn(
        [action.userId, action.area, action.zoneNumber],
        action.card
      )
    },
  },
  initialState
)
