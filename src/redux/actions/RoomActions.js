import ActionTypes from './ActionTypes'
import { createAction } from 'redux-actions'

export const createGame = createAction(ActionTypes.CREATE_GAME)

export const joinGame = createAction(ActionTypes.JOIN_GAME)

// TODO: make create game do API stuff
// export function createGame() {
//   return dispatch => {
//     createGame()
//   }
// }
