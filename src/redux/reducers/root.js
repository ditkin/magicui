import { combineReducers } from 'redux'

import game from './game'
import room from './room'

import decks from './decks'
import hands from './hands'
import fields from './fields'
import graves from './graves'

export default combineReducers({
  user: state => ({
    id: 123,
  }),
  opponent: state => ({
    id: 456,
  }),
  room,
  decks,
  hands,
  fields,
  graves,
})
