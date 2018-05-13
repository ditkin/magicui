import { takeEvery } from 'redux-saga/effects'
import ActionTypes from '../redux/actions/ActionTypes'

export default function* handleGameActions({ socket, userId }) {
  yield takeEvery(ActionTypes.GAME_UPDATED)
}