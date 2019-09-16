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

const WaitingRoom = ({ rooms, userId, opponentId }) => {
  const groupedRooms = rooms
    .map(room => <Room room={room} />)
    .push(<CreateRoom />)
    .groupBy((_room, index) => Math.floor(index / 6))
    .toList()
  return (
    <UIFlex align="start">
      {groupedRooms.map(column => (
        <UIFlex direction="column">{column}</UIFlex>
      ))}
    </UIFlex>
  )
}

WaitingRoom.propTypes = {
  userId: PropTypes.number.isRequired,
  opponentId: PropTypes.number.isRequired,
}

export default compose(
  connect(
    state => ({
      userId: state.user.id,
      rooms: state.rooms,
    }),
    {
      ...GameActions,
      ...RoomActions,
    }
  )
)(WaitingRoom)
