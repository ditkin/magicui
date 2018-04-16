import { createSelector } from 'reselect'

export const getDeck = id => state => {
  return state.decks.get(id)
}

export const getField = id => state => {
  return state.fields.get(id)
}

export const getGrave = id => state => {
  return state.graves.get(id)
}

export const getHand = id => state => {
  return state.hands.get(id)
}
