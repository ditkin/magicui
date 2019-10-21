import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as RoomActions from '../redux/actions/RoomActions'
import { sendMessage } from '../sockets'
import RoomModel from '../models/Room'

const WaitingRoom = ({ room }) => {
  const handleLeave = () => sendMessage(RoomActions.leaveRoom())

  return (
    <Fragment>
      <button onClick={handleLeave}>{'< Go back'}</button>
    </Fragment>
  )
}

WaitingRoom.propTypes = {
  room: PropTypes.instanceOf(RoomModel),
}

export default compose(
  connect(state => ({
    room: state.room,
  }))
)(WaitingRoom)
