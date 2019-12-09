import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { sendChat } from '../redux/actions/GameActions'
import { sendMessage } from '../sockets'
import { List } from 'immutable'
import styled from 'styled-components'

const ChatHistory = styled.div`
  width: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
  word-wrap: break-word;
  margin-top: 24px;
`
const ChatInput = styled.input`
  max-width: 500px;
`

const ChatBox = ({ chat = [] }) => {
  const [draft, setDraft] = useState('')

  const handleType = ({ target: { value } }) => setDraft(value)

  const handleKeyDown = e => {
    e.key === 'Enter' && sendMessage(sendChat(draft))
  }

  return (
    <Fragment>
      <ChatHistory>
        {chat.map(message => (
          <Fragment>
            {message}
            <br />
          </Fragment>
        ))}
      </ChatHistory>
      <ChatInput
        onChange={handleType}
        onKeyDown={handleKeyDown}
        value={draft}
      />
    </Fragment>
  )
}

ChatBox.propTypes = {
  chat: PropTypes.instanceOf(List),
}

export default compose(
  connect(state => ({
    chat: state.room.chat,
  }))
)(ChatBox)
