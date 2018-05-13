import { Map, List } from 'immutable'
import CardModel from '../models/Card'

export const getBoardStateFromPayload = area => (initialState, action) =>
  action.payload.players.reduce((acc, player) => {
    const cards = player[area].map(card => CardModel.from(card))
    return acc.set(player.id, List(cards))
  }, new Map())
