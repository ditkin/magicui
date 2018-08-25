import { Map, List } from 'immutable'
import CardModel from '../models/Card'

/**
 * Decodes the BE's game update into cache of current game
 * @param {*} area deck, hand, field, or grave
 * @returns {Map} mapping of user and opponent ID to that player's cards in area
 */
export const getBoardStateFromPayload = area => (initialState, action) =>
  action.payload.players.reduce((acc, player) => {
    const cards = player[area].map(card => CardModel.from(card))
    return acc.set(player.id, List(cards))
  }, new Map())
