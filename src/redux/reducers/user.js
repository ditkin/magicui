import { handleActions } from 'redux-actions'
import ActionTypes from '../actions/ActionTypes'

const initialState = {}

export default handleActions(
  {
    [ActionTypes.SET_USER_ID](user, action) {
      return { id: action.payload }
    },
  },
  initialState
)
