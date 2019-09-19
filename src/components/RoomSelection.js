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

RoomSelection.propTypes = {}

export default compose(
  connect(state => ({
    rooms: state.rooms,
  }))
)(RoomSelection)
