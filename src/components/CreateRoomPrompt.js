import React, { useCallback, useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { joinRoom } from '../redux/actions/RoomActions'
import { sendMessage } from '../sockets'
import * as RoomActions from '../redux/actions/RoomActions'
import { compose } from 'redux'
import withModal from '../hocs/withModal'
import ActionTypes from '../redux/actions/ActionTypes'

const { CREATE_ROOM } = ActionTypes

const CreateRoomForm = ({}) => {
  const [name, setName] = useState('')
  const [game, setGame] = useState('mons')
  const [maxPlayers, setMaxPlayers] = useState(2)

  const handleSubmit = () => {
    sendMessage({ type: CREATE_ROOM, name, game, max_players: maxPlayers })
  }

  return (
    <Fragment>
      <label for="name">Room Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
      <br />
      <label for="game">Game</label>
      <select
        id="game"
        value={game}
        onChange={({ target: { value } }) => setGame(value)}
      >
        <option value="mons">Mons</option>
      </select>
      <br />
      {game !== 'mons' && (
        <Fragment>
          <label for="maxPlayers">Max players</label>
          <input
            type="number"
            id="maxPlayers"
            value={maxPlayers}
            onChange={({ target: { value } }) => setMaxPlayers(value)}
          />
        </Fragment>
      )}
      <button onClick={handleSubmit}>Create</button>
    </Fragment>
  )
}

export default compose(
  connect(
    () => ({}),
    {
      ...RoomActions,
    }
  )
)(CreateRoomForm)
