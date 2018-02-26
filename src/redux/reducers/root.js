import { combineReducers } from 'redux'

import player from './player'

export default combineReducers({
  player1: player(1),
  player2: player(2),
})
