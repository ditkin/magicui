import { handleActions } from 'redux-actions'
import ActionTypes from '../actions/ActionTypes'

const initialState = {}

export default handleActions(
  {
    [ActionTypes.SET_OPPONENT_ID](user, action) {
      return { id: action.id }
    },
  },
  initialState
)
