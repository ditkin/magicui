import ActionTypes from './ActionTypes'
import { createAction } from 'redux-actions'

export const roomsUpdated = createAction(ActionTypes.ROOMS_UPDATED)

export const joinRoom = room => ({
  type: ActionTypes.JOIN_ROOM,
  ...room,
})

export const leaveRoom = createAction(ActionTypes.LEAVE_ROOM)

export const roomLeft = createAction(ActionTypes.ROOM_LEFT)

export const roomJoined = createAction(ActionTypes.ROOM_JOINED)

export const selfAwaken = createAction(ActionTypes.SET_USER_ID)

export const challengerAppears = createAction(ActionTypes.SET_OPPONENT_ID)
