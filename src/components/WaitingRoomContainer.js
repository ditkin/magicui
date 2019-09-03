import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as RoomActions from '../redux/actions/RoomActions'
import * as GameActions from '../redux/actions/GameActions'
import PlayerContainer from './PlayerContainer'

const WaitingRoom = ({ userId, opponentId }) => {
  return 'Waiting for opponent'
}

WaitingRoom.propTypes = {
  userId: PropTypes.number.isRequired,
  opponentId: PropTypes.number.isRequired,
}

export default compose(
  connect(
    state => ({
      userId: state.user.id,
    }),
    {
      ...GameActions,
      ...RoomActions,
    }
  )
)(WaitingRoom)
