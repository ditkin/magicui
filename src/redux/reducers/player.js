import { handleActions } from 'redux-actions'
import Player from '../../models/Player'
import ActionTypes from '../actions/ActionTypes'

const initialState = new Player()

export default playerNumber => handleActions(
  {
    [ActionTypes.GAME_UPDATED](player, action) {
    	const playerId = `player${playerNumber}`
      return Player.from(action.payload[playerId])
    },
  },
  initialState
)

