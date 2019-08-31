import Card from '../models/Card'

// these functions are abstracted to work for each of the 4 areas
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

export const targetCard = area => (areas, action) => {
  const isAreaTargeted = area === action.area
  // if someone targets a card in opponent's hand, un-target all cards
  // in opponent's non-hand areas
  if (!isAreaTargeted) {
    return areas.update(action.id, untargetedArea =>
      untargetedArea.map(card => card.set('targeted', false))
    )
  }
  // if someone targets a card in opponent's hand, un-target all cards
  // in opponent's hand then target the card in their hand
  return areas.update(action.id, targetedArea => {
    const matchedCardIndex = targetedArea.findIndex(
      card => action.card.name === card.name
    )
    return targetedArea
      .map(card => card.set('targeted', false))
      .update(matchedCardIndex, card => card.set('targeted', true))
  })
}

export const isTurnable = (me, area) => {
  return area === 'hand' ? false : me
}
