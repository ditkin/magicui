import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'
import { List, Seq } from 'immutable'

import { ItemTypes } from '../constants'

import Zone from './Zone'
import Card from './Card'
import PlaceholderCard from './PlaceholderCard'
import UIFlex from './UIFlex'
import { isTurnable } from '../utils/board'

export default class PaginatedZone extends PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    me: PropTypes.bool.isRequired,
    area: PropTypes.string.isRequired,
    cards: PropTypes.instanceOf(List).isRequired,
    onDrag: PropTypes.func,
    classes: PropTypes.string,
  }

  renderColumnContents(cards) {
    const { id, me, area, onDrag } = this.props

    const turnable = isTurnable(me, area)

    // TODO make areas constants
    const columnContents = cards.map(card => (
      <Card
        id={id}
        me={me}
        area={area}
        card={card}
        turnable={turnable}
        onDrag={onDrag}
      />
    ))

    return <UIFlex direction="column">{columnContents}</UIFlex>
  }

  groupIntoColumns(columnHeight, cards) {
    return cards.groupBy((card, index) => Math.floor(index / columnHeight))
  }

  renderCardColumns() {
    const { cards } = this.props

    const groupedCards = this.groupIntoColumns(6, cards).toList()
    const cardColumns = groupedCards.map(this.renderColumnContents)

    return (
      <UIFlex marginTop={5} align="start">
        {cardColumns}
      </UIFlex>
    )
  }

  render() {
    const { classes, id, me, area, onDrag } = this.props

    const zoneClasses = classes || classNames(area)

    return (
      <Zone classes={zoneClasses} id={id} me={me} area={area} onDrag={onDrag}>
        {this.renderCardColumns()}
      </Zone>
    )
  }
}
