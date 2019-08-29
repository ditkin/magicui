import React from 'react'
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'
import { List } from 'immutable'

import { ItemTypes } from '../constants'

import Zone from './Zone'
import Card from './Card'
import PlaceholderCard from './PlaceholderCard'

const CardZone = ({ id, me, area, cards, classes }) => {
  const zoneClasses = classes || classNames(area)

  const turnable = area === 'hand' ? false : me

  return (
    <Zone classes={zoneClasses} id={id} me={me} area={area}>
      {cards.size === 0 ? (
        <PlaceholderCard />
      ) : (
        cards.map((card, index) => (
          <Card
            key={`${card.name}${index}`}
            id={id}
            me={me}
            area={area}
            zoneNumber={index}
            card={card}
            turnable={turnable}
          />
        ))
      )}
    </Zone>
  )
}

CardZone.propTypes = {
  id: PropTypes.number.isRequired,
  me: PropTypes.bool.isRequired,
  area: PropTypes.string.isRequired,
  cards: PropTypes.instanceOf(List).isRequired,
  classes: PropTypes.string,
}

export default CardZone
