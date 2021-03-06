import { combineReducers } from 'redux'

import game from './game'
import room from './room'
import rooms from './rooms'

import decks from './decks'
import hands from './hands'
import fields from './fields'
import graves from './graves'
import user from './user'
import opponent from './opponent'

export default combineReducers({
  user,
  opponent,
  rooms,
  room,
  decks,
  hands,
  fields,
  graves,
})
