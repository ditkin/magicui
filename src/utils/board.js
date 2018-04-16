import CardModel from '../models/Card'

export const moveFromArea = (area, action) => {
  const cardIndex = area.get(action.id).findIndex(
    card => card.name === action.card.name
  )
  return area.deleteIn([action.id, cardIndex])
}

export const moveToArea = (area, action) => {
  return area.setIn(
    [action.id, action.zone],
    CardModel.from(action.card)
  )
}