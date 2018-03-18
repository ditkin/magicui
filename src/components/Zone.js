import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'

import { ItemTypes } from '../constants'
import { DropTarget } from 'react-dnd'

import CardModel from '../models/Card'
import Card from './Card'

const zoneTarget = {
  drop(props, monitor) {
    console.log('dropped')
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
})

const Zone = CreateReactClass({
  propTypes: {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    number: PropTypes.number.isRequired,
    area: PropTypes.string.isRequired,
    me: PropTypes.bool.isRequired,
    card: PropTypes.instanceOf(CardModel).isRequired,
  },

  render() {
    const { connectDropTarget, isOver, me, card } = this.props

    const classes = classNames('zone', { me, isOver })

    return connectDropTarget(
      <div className={classes}>
        <Card card={card} me={me} immobile={false} />
      </div>
    )
  },
})

export default DropTarget(ItemTypes.CARD, zoneTarget, collect)(Zone)