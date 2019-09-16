import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import RoomModel from '../models/Room'
import { connect } from 'react-redux'
import { joinRoom } from '../redux/actions/RoomActions'
import { sendMessage } from '../sockets'
import RoomElement from './styled/RoomElement'

const Room = ({ room }) => {
  const full = room.player_ids.size === room.max_capacity
  const classes = classNames({
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
    <RoomElement className={classes} onClick={handleClick}>
      {full ? '[FULL]' : null}
      {room.name}
    </RoomElement>
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
