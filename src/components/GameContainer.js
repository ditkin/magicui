import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as RoomActions from '../redux/actions/RoomActions'
import * as GameActions from '../redux/actions/GameActions'
import PlayerContainer from './PlayerContainer'

const Game = ({ userId, opponentId }) => {
  return (
    <Fragment>
      <PlayerContainer id={opponentId} me={false} />
      <PlayerContainer id={userId} me={true} />
    </Fragment>
  )
}

Game.propTypes = {
  userId: PropTypes.number.isRequired,
  opponentId: PropTypes.number.isRequired,
}

export default compose(
  connect(
    state => ({
      userId: state.user.id,
      opponentId: state.opponent.id,
    }),
    {
      ...GameActions,
      ...RoomActions,
    }
  )
)(Game)
