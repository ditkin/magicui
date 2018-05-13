import { createSelector } from 'reselect'
import { fromJS } from 'immutable'

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

export const getPlayer = id => state => ({
  id,
  deck: fromJS(getDeck(id)(state)),
  field: fromJS(getField(id)(state)),
  grave: fromJS(getGrave(id)(state)),
  hand: fromJS(getHand(id)(state)),
})

export const getUser = state => {
  const id = state.user.id
  return getPlayer(id)(state)
}
export const getOpponent = state => {
  const id = state.opponent.id
  return getPlayer(id)(state)
}
export const getBoardState = createSelector(
  [getUser, getOpponent],
  (user, opponent) => ({ players: [user, opponent] })
)

