import ActionTypes from './ActionTypes'
import { createAction } from 'redux-actions'

export const createGame = createAction(ActionTypes.CREATE_GAME)

export const joinGame = createAction(ActionTypes.JOIN_GAME)

export const selfAwaken = id => ({
  type: ActionTypes.SET_USER_ID,
  id,
})

export const challengerAppears = id => ({
  type: ActionTypes.SET_OPPONENT_ID,
  id,
})

// TODO: make create game do API stuff
// export function createGame() {
//   return dispatch => {
//     createGame()
//   }
// }
