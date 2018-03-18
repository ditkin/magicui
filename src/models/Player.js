import { Record, List } from 'immutable'
import Card from './Card'

const defaults = {
	field: new List(),
	hand: new List(),
	deck: new List(),
	grave: new List(),
	exile: new List(),
}

export default class Player extends Record(defaults) {
  static from(json) {
    return new Player({
    	field: this.toCards(json.field),
    	hand: this.toCards(json.hand),
    	deck: this.toCards(json.deck),
    	grave: this.toCards(json.grave),
    	exile: this.toCards(json.exile),
    })
  }

  static toCards(cardsJSON) {
  	if (cardsJSON && cardsJSON.map) {
  		const cards = cardsJSON.map(
  			cardJSON => Card.from(cardJSON)
  		)
  		return new List(cards)
  	}
  	return new List()
  }
}