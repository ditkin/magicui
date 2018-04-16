import { handleActions } from 'redux-actions';
import ActionTypes from '../actions/ActionTypes'

export default handleActions({
  [ActionTypes.CREATE_GAME]: () => {},
  [ActionTypes.JOIN_GAME]: () => {},
  [ActionTypes.START_GAME]: () => { opponentId: 456 },
}, {})