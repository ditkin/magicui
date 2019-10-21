import { List, Record } from 'immutable'

const defaults = {
  owner_id: null,
  name: 'Game room',
  uuid: null,
  max_players: 2,
  player_ids: [],
  board: null,
}

export default class Room extends Record(defaults) {
  static from(json) {
    return new Room(json)
  }
}
