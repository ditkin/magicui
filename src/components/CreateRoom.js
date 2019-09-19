import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { joinRoom } from '../redux/actions/RoomActions'
import Modal from 'react-modal'
import RoomElement from './styled/RoomElement'
import { sendMessage } from '../sockets'
import * as RoomActions from '../redux/actions/RoomActions'
import CreateRoomForm from './CreateRoomForm'
import { compose } from 'redux'
import withModal from '../hocs/withModal'

const CreateRoom = ({ openModal }) => {
  return <RoomElement onClick={openModal}>{'+'}</RoomElement>
}

export default compose(
  withModal(CreateRoomForm),
  connect(
    () => ({}),
    {
      ...RoomActions,
    }
  )
)(CreateRoom)
