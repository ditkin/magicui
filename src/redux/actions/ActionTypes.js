import keyMirror from 'keymirror'

export default keyMirror({
  // sockets
  CREATE_GAME: null,
  JOIN_GAME: null,
  // sockets v2
  ROOMS_UPDATED: null,
  CREATE_ROOM: null,
  JOIN_ROOM: null,
  ROOM_JOINED: null,
  LEAVE_ROOM: null,
  ROOM_LEFT: null,
  REGISTER: null,

  SET_USER_ID: null,
  SET_OPPONENT_ID: null,

  GAME_UPDATED: null,
  SEND_GAME_UPDATE: null,
  GAME_UPDATE_FAILED: null,

  FROM_DECK: null,
  FROM_FIELD: null,
  FROM_HAND: null,
  FROM_GRAVE: null,

  TO_DECK: null,
  TO_FIELD: null,
  TO_HAND: null,
  TO_GRAVE: null,

  TARGET_CARD: null,
})
