import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { joinRoom } from '../redux/actions/RoomActions'
import Modal from 'react-modal'
import RoomElement from './styled/RoomElement'
import { sendMessage } from '../sockets'
import * as RoomActions from '../redux/actions/RoomActions'
import CreateRoomPrompt from './CreateRoomPrompt'
import { compose } from 'redux'
import withModal from '../hocs/withModal'

const CreateRoom = ({ openModal }) => {
  return <RoomElement onClick={openModal}>{'+'}</RoomElement>
}

export default compose(
  withModal(CreateRoomPrompt),
  connect(
    () => ({}),
    {
      ...RoomActions,
    }
  )
)(CreateRoom)
