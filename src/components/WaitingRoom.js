import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as RoomActions from '../redux/actions/RoomActions'
import * as GameActions from '../redux/actions/GameActions'
import PlayerContainer from './PlayerContainer'
import UIFlex from './UIFlex'
import Room from './Room'
import CreateRoom from './CreateRoom'
import { sendMessage } from '../sockets'

const WaitingRoom = ({ room }) => {
  const handleLeave = () => sendMessage(RoomActions.leaveRoom())

  return (
    <Fragment>
      <button onClick={handleLeave}>{'< Go back'}</button>
    </Fragment>
  )
}

WaitingRoom.propTypes = {}

export default compose(
  connect(state => ({
    room: state.room,
  }))
)(WaitingRoom)
