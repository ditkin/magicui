import Card from '../models/Card'
import memoize from '@hs/transmute/memoize'

export const moveFromArea = (area, action) => {
  const cardIndex = area
    .get(action.payload.id)
    .findIndex(card => card.name === action.payload.card.name)
  return area.deleteIn([action.payload.id, cardIndex])
}

export const moveToArea = (areas, action) => {
  return areas.update(action.payload.id, area =>
    area.push(Card.from(action.payload.card))
  )
}

export const isTurnable = memoize((me, area) => {
  return area === 'hand' ? false : me
})
