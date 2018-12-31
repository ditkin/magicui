import { handleActions } from 'redux-actions'
import { getBoardStateFromPayload } from '../../utils/unpack'
import { moveFromArea, moveToArea } from '../../utils/board'
import ActionTypes from '../actions/ActionTypes'

const initialState = new Map()

export default handleActions(
  {
    [ActionTypes.GAME_UPDATED]: getBoardStateFromPayload('field'),
    [ActionTypes.FROM_FIELD]: moveFromArea,
    [ActionTypes.TO_FIELD]: moveToArea,
    [ActionTypes.TARGET_CARD]: (areas, action) => {
      return areas.update(action.payload.id, area => area)
    },
  },
  initialState
)
