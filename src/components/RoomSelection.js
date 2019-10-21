import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import UIFlex from './UIFlex'
import Room from './Room'
import CreateRoom from './CreateRoom'
import { List } from 'immutable'

const RoomSelection = ({ rooms }) => {
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

RoomSelection.propTypes = {
  rooms: PropTypes.instanceOf(List),
}

export default compose(
  connect(state => ({
    rooms: state.rooms,
  }))
)(RoomSelection)
