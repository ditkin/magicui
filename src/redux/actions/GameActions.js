import ActionTypes from './ActionTypes'
import { createAction } from 'redux-actions'
import { fetchGameMock } from '../../api/gameAPI'

export const fetchGameRequestSucceeded = createAction(
  ActionTypes.GAME_UPDATED
)

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

export function updateBoardState() {
  // do I update the models, then make an API call?
  // should that all be part of this action?
  // how do I codify every update?
  // should I use redux-observable to make the
  // sync & API call happen after every updateBoardState
  // action is dispatched?
}

const moveFrom = area => createAction(
  ActionTypes[`FROM_${area.toUpperCase()}`]
)

const moveTo = area => createAction(
  ActionTypes[`TO_${area.toUpperCase()}`]
)

export function moveCard(id, card, areaFrom, areaTo, zone) {
  return dispatch => {
    dispatch(moveFrom(areaFrom))
    dispatch(moveTo(areaTo))
  }
}
