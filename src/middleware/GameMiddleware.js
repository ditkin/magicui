import ActionTypes from '../redux/actions/ActionTypes'
import { sendGameUpdate } from '../redux/actions/GameActions'
import { getBoardState } from '../redux/selectors/board'

export default ({ dispatch, getState }) => next => action => {
  next(action);
  // switch (action.type) {
  //   case ActionTypes.TO_DECK:
  //   case ActionTypes.TO_FIELD:
  //   case ActionTypes.TO_HAND:
  //   case ActionTypes.TO_GRAVE:
  //     setTimeout(() => {
  //       const state = getState()
  //       const boardState = getBoardState(state)
  //       dispatch(sendGameUpdate(boardState))
  //     }, 200)
  // }
}