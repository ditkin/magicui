import { handleActions } from 'redux-actions'
import { Seq } from 'immutable'

import Player from '../../models/Player'
import ActionTypes from '../actions/ActionTypes'

//import player from './player'

//[action.userId]: itemsInUserReducer(state[action.userId], action)
const initialState = {}

export default handleActions(
  {
    [ActionTypes.GAME_UPDATED](game, action) {
      return Seq(action.payload)
        .map(player => Player.from(player))
        .toMap()
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
