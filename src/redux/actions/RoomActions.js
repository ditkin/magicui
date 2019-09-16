import ActionTypes from './ActionTypes'
import { createAction } from 'redux-actions'

export const setRooms = createAction(ActionTypes.SET_ROOMS)

export const joinRoom = createAction(ActionTypes.JOIN_ROOM)

export const roomCreated = createAction(ActionTypes.ROOM_CREATED)

export const roomJoined = createAction(ActionTypes.ROOM_JOINED)

export const selfAwaken = createAction(ActionTypes.SET_USER_ID)

export const challengerAppears = createAction(ActionTypes.SET_OPPONENT_ID)
