import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import RoomModel from '../models/Room'
import { connect } from 'react-redux'
import { joinRoom } from '../redux/actions/RoomActions'
import { sendMessage } from '../sockets'

const Room = ({ room }) => {
  const full = room.player_ids.size === room.max_capacity
  const classes = classNames('room', {
    full,
  })

  const handleClick = () => {
    if (full) {
      console.log('room is full')
      return
    }
    sendMessage(joinRoom(room.toJS()))
  }

  return (
    <div className={classes} onClick={handleClick}>
      {room.name}
    </div>
  )
}

Room.propTypes = {
  room: PropTypes.instanceOf(Room),
}

export default Room
// export default connect(
//   () => ({}),
//   {
//     ...RoomActions,
//   }
// )(Room)
