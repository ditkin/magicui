import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'
import { List } from 'immutable'

import CardModel from '../models/Card'
import Card from './Card'

export default CreateReactClass({
  propTypes: {
    me: PropTypes.bool.isRequired,
    card: PropTypes.instanceOf(CardModel).isRequired,
  },

  render() {
    const { me, card } = this.props

    const classes = classNames('zone', { me })

    return (
      <div className={classes}>
        <Card card={card} me={me} immobile={false} />
      </div>
    )
  },
})
