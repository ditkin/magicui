import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'
import { List } from 'immutable'

import CardZone from './CardZone'

export default CreateReactClass({
  propTypes: {
    id: PropTypes.number.isRequired,
    me: PropTypes.bool.isRequired,
    cards: PropTypes.instanceOf(List).isRequired,
    moveCardFrom: PropTypes.func.isRequired,
    moveCardTo: PropTypes.func.isRequired,
  },

  render() {
    const { id, me, cards, moveCardFrom, moveCardTo } = this.props

    return (
      <CardZone
        area="field"
        id={id}
        me={me}
        cards={cards}
        moveCardFrom={moveCardFrom}
        moveCardTo={moveCardTo}
      />
    )
  }
})