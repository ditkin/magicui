import { Record } from 'immutable'

const defaults = {
	sideways: false,
	faceDown: false,
  targeted: false,
  name: '',
  imageSource: '',
}


export default class Card extends Record(defaults) {
  static from(json) {
    return new Card(json)
  }
}

