import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import RoomSelection from './RoomSelection'
import WaitingRoom from './WaitingRoom'

const WaitingRoomContainer = ({ isInRoom }) => {
  return isInRoom ? <WaitingRoom /> : <RoomSelection />
}

WaitingRoomContainer.propTypes = {
  isInRoom: PropTypes.bool.isRequired,
}

export default compose(
  connect(state => ({
    isInRoom: state.room.uuid !== undefined,
  }))
)(WaitingRoomContainer)
