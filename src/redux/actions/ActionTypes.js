import keyMirror from 'keymirror'

export default keyMirror({
  // sockets v2
  CREATE_ROOM: null,
  JOIN_ROOM: null,
  LEAVE_ROOM: null,
  REGISTER: null,
  SEND_CHAT: null,

  // from backend
  REGISTERED: null,
  ROOMS_UPDATED: null,
  ROOM_JOINED: null,
  ROOM_LEFT: null,
  CHAT_SENT: null,
  GAME_START: null,
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
