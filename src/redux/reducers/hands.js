import { handleActions } from 'redux-actions'
import { getBoardStateFromPayload } from '../../utils/unpack'
import { moveFromArea, moveToArea } from '../../utils/board'
import ActionTypes from '../actions/ActionTypes'

const initialState = new Map()

export default handleActions(
  {
    [ActionTypes.GAME_UPDATED]: getBoardStateFromPayload('hand'),
    [ActionTypes.FROM_HAND]: moveFromArea,
    [ActionTypes.TO_HAND]: moveToArea,
  },
  initialState
)
