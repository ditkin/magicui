import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as RoomActions from '../redux/actions/RoomActions'
import * as GameActions from '../redux/actions/GameActions'
import RoomSelection from './RoomSelection'
import WaitingRoom from './WaitingRoom'

const WaitingRoomContainer = ({ isInRoom, rooms, userId, opponentId }) => {
  return isInRoom ? <WaitingRoom /> : <RoomSelection />
}

WaitingRoomContainer.propTypes = {
  userId: PropTypes.number.isRequired,
  opponentId: PropTypes.number.isRequired,
}

export default compose(
  connect(
    state => ({
      userId: state.user.id,
      isInRoom: state.room.uuid !== undefined,
    }),
    {
      ...GameActions,
      ...RoomActions,
    }
  )
)(WaitingRoomContainer)
