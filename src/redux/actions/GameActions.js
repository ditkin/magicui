import ActionTypes from './ActionTypes'
import { createAction } from 'redux-actions'
import { fetchGameMock } from '../../api/gameAPI'
import { getBoardState } from '../selectors/board'

export const fetchGameRequestSucceeded = createAction(ActionTypes.GAME_UPDATED)

export const fetchGameRequestFailed = createAction(
  ActionTypes.GAME_UPDATE_FAILED
)

export function updateGameState() {
  return dispatch => {
    fetchGameMock().then(
      response => dispatch(fetchGameRequestSucceeded(response)),
      error => dispatch(fetchGameRequestFailed(error))
    )
  }
}

export function receiveGameUpdate(boardState) {
  const { players } = boardState
  return {
    type: ActionTypes.GAME_UPDATED,
    payload: { players },
  }
}

export function sendGameUpdate(boardState) {
  const { players } = boardState
  return {
    type: ActionTypes.SEND_GAME_UPDATE,
    players,
  }
}

export function updateBoardState() {
  // do I update the models, then make an API call?
  // should that all be part of this action?
  // how do I codify every update?
  // should I use redux-observable to make the
  // sync & API call happen after every updateBoardState
  // action is dispatched?
}

export const moveFrom = area =>
  createAction(ActionTypes[`FROM_${area.toUpperCase()}`])

export const moveTo = area =>
  createAction(ActionTypes[`TO_${area.toUpperCase()}`])

export function moveCardFrom(area, ...props) {
  return dispatch => dispatch(moveFrom(area)(...props))
}

export function moveCardTo(area, ...props) {
  return (dispatch, getState) => {
    dispatch(moveTo(area)(...props))

    const boardState = getBoardState(getState())
    window.crazySocket.send(JSON.stringify(sendGameUpdate(boardState)))
  }
}

export function moveCard(id, card, areaFrom, areaTo, zone) {
  return dispatch => {
    dispatch(moveFrom(areaFrom))
    dispatch(moveTo(areaTo))
  }
}
