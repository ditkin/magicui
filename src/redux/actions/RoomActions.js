import ActionTypes from './ActionTypes'
import { createAction } from 'redux-actions'

export const setRooms = createAction(ActionTypes.SET_ROOMS)

export const joinRoom = room => {
  return {
    type: ActionTypes.JOIN_ROOM,
    room,
  }
}
export const roomCreated = room => {
  return {
    type: ActionTypes.ROOM_CREATED,
    room,
  }
}

export const roomJoined = createAction(ActionTypes.ROOM_JOINED)

export const selfAwaken = id => ({
  type: ActionTypes.SET_USER_ID,
  id,
})

export const challengerAppears = id => ({
  type: ActionTypes.SET_OPPONENT_ID,
  id,
})
