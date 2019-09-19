import React, { useCallback, useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { joinRoom } from '../redux/actions/RoomActions'
import { sendMessage } from '../sockets'
import * as RoomActions from '../redux/actions/RoomActions'
import { compose } from 'redux'
import withModal from '../hocs/withModal'
import ActionTypes from '../redux/actions/ActionTypes'
import ButtonElement from './styled/ButtonElement'
import InputElement from './styled/InputElement'
import SelectElement from './styled/SelectElement'

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
      <label style={{ marginBottom: 8 }} for="name">
        Room Name
      </label>
      <br />
      <InputElement
        style={{ marginBottom: 16 }}
        type="text"
        id="name"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
      <br />
      <label style={{ marginBottom: 8 }} for="game">
        Game
      </label>
      <br />
      <SelectElement
        style={{ marginBottom: 16 }}
        id="game"
        value={game}
        onChange={({ target: { value } }) => setGame(value)}
      >
        <option value="mons">Mons</option>
      </SelectElement>
      <br />
      {game !== 'mons' && (
        <Fragment>
          <label style={{ marginBottom: 8 }} for="maxPlayers">
            Max players
          </label>
          <br />
          <InputElement
            style={{ marginBottom: 16 }}
            type="number"
            id="maxPlayers"
            value={maxPlayers}
            onChange={({ target: { value } }) => setMaxPlayers(value)}
          />
          <br />
        </Fragment>
      )}
      <ButtonElement onClick={handleSubmit}>Create</ButtonElement>
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
