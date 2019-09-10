import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import RoomModel from '../../models/Room'
import { connect } from 'react-redux'
import { joinRoom } from '../redux/actions/RoomActions'

const CreateRoom = ({ room }) => {
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
      {displayName}
    </div>
  )
}

CreateRoom.propTypes = {
  room: PropTypes.instanceOf(Room),
}

export default connect(
  () => ({}),
  {
    ...RoomActions,
  }
)(CreateRoom)
