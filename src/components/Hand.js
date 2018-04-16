import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'
import { List } from 'immutable'

import Zone from './Zone'

export default CreateReactClass({
  propTypes: {
    id: PropTypes.number.isRequired,
    me: PropTypes.bool.isRequired,
    cards: PropTypes.instanceOf(List).isRequired,
  },

  renderCards() {
    const { id, me, cards } = this.props
    // TODO make areas constants
    return cards
      .map(card => card.set('facedown', !me))
      .map((card, index) => (
        <Zone
          id={id}
          me={me}
          area="hand"
          zoneNumber={index}
          card={card}
        />
      ))
  },

  render() {
    const { me } = this.props
    const classes = classNames('hand', { me })
    return (
      <div className={classes}>
        {this.renderCards()}
      </div>
    )
  }
})