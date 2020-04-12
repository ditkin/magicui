import keyMirror from 'keymirror'

export const ItemTypes = keyMirror({
  CARD: null,
})

// endpoints
export const isLocal = window.location.href.includes('localhost')

export const API_BASE_URL = isLocal
  ? 'http://localhost:1234'
  : 'https://agnosticard-api.herokuapp.com'
