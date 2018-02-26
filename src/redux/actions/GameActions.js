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