import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { joinRoom } from '../redux/actions/RoomActions'
import { sendMessage } from '../sockets'
import RoomElement from './styled/RoomElement'

const Room = ({ room }) => {
  const full = room.player_ids.length === room.max_players
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
      {full ? '[FULL]' : `[${room.player_ids.length}/${room.max_players}]`}
      {room.name}
    </RoomElement>
  )
}

Room.propTypes = {
  room: PropTypes.instanceOf(Room),
}

export default Room
