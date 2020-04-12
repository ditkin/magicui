import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { compose } from 'redux'
import * as RoomActions from '../redux/actions/RoomActions'
import { sendMessage } from '../sockets'
import RoomModel from '../models/Room'

const WaitingRoom = () => {
  const handleLeave = () => sendMessage(RoomActions.leaveRoom())

  const room = useSelector(state => state.room)

  return (
    <Fragment>
      <button onClick={handleLeave}>{'< Go back'}</button>
    </Fragment>
  )
}

WaitingRoom.propTypes = {
  room: PropTypes.instanceOf(RoomModel),
}

export default WaitingRoom
