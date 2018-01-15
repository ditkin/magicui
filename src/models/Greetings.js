import { List, Record } from 'Immutable';

export default class Greetings extends List {
  static from(json) {
    if (json && json.map) {
      return new Greetings(json);
    }
  }
}

