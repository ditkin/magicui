import React from 'react'
import PaginatedZone from './PaginatedZone'
import Zone from './Zone'
import UIFlex from './UIFlex'
import * as GameActions from '../redux/actions/GameActions'

import { connect } from 'react-redux'

const Destinations = ({
  destinations,
  id,
  me,
  cards,
  area,
  moveCardFrom,
  moveCardTo
}) => {
  return (
    <UIFlex align="start">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {destinations.map(destination => (
          <Zone id={id} me={me} area={destination}>
            <img src={`/${destination}.png`} />
          </Zone>
        ))}
      </div>
      <PaginatedZone
        classes="deckList"
        id={id}
        me={me}
        area={area}
        cards={cards}
        moveCardFrom={moveCardFrom}
        moveCardTo={moveCardTo}
        onDrag={this.hideModal}
      />
    </UIFlex>
  )
}
export default connect(
  (state, { id, area }) => ({
    cards: state[`${area}s`].get(id),
  }),
  {
    ...GameActions,
  }
)(Destinations)
