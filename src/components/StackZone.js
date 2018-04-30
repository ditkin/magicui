import React from 'react'
import Modal from 'react-modal';
import PropTypes from 'prop-types'
import CreateReactClass from 'create-react-class'
import classNames from 'classnames'
import { List } from 'immutable'

import { ItemTypes } from '../constants'
import { DropTarget } from 'react-dnd'

import Card from './Card'
import PlaceholderCard from './PlaceholderCard'
import CardZone from './CardZone'
import Zone from './Zone'
import UIFlex from './UIFlex'

const zoneTarget = {
  drop({ moveCardTo, moveCardFrom, area, id, zoneNumber }, monitor) {
    const { area: fromArea, card: cardData } = monitor.getItem()
    const card = cardData.set('faceDown', false)

    if (fromArea && area) {
      moveCardFrom(fromArea, { id, card })
      moveCardTo(area, { id, card, zoneNumber })
    }
  },

  hover(props, monitor, component) {
    if (!monitor.getItem().card.faceDown) {
      component.openModal()
    }
  },
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
})

const StackZone = CreateReactClass({
  propTypes: {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    area: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    me: PropTypes.bool.isRequired,
    cards: PropTypes.instanceOf(List).isRequired,
    moveCardFrom: PropTypes.func.isRequired,
    moveCardTo: PropTypes.func.isRequired,
    destinations: PropTypes.instanceOf(List).isRequired,
  },

  getInitialState() {
    return { modalIsOpen: false }
  },

  escFunction({ keyCode }) {
    if(keyCode === 27) {
      this.closeModal()
    }
  },

  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  },

  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  },

  openModal() {
    this.setState({ modalIsOpen: true })
  },

  closeModal() {
    this.setState({ modalIsOpen: false })
  },

  hideModal() {
    this.setState({ modalIsVisible: false })
  },

  showModal() {
    this.setState({ modalIsVisible: true })
  },

  renderZone() {
    const { id, me, cards, area, moveCardFrom, moveCardTo } = this.props
    // onDrag={this.closeModal}
    return (
      <CardZone
        classes="deckList"
        id={id}
        me={me}
        area={area}
        cards={cards}
        moveCardFrom={moveCardFrom}
        moveCardTo={moveCardTo}
        onDrag={this.hideModal}
      />
    )
  },

  renderDestinations() {
    const { destinations, id, me, cards, area, moveCardFrom, moveCardTo } = this.props

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {destinations.map(destination => (
           <Zone
            id={id}
            me={me}
            area={destination}
            moveCardFrom={moveCardFrom}
            moveCardTo={moveCardTo}
          >
            <img src={`/${destination}.png`} />
          </Zone>
        ))}
      </div>
    )
  },

  renderModal() {
    const { modalIsOpen, modalIsVisible } = this.state
    // TODO afterOpenModal go into drag state?
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
      >
        <UIFlex>
          {this.renderDestinations()}
          {this.renderZone()}
        </UIFlex>
      </Modal>
    )
  },

  render() {
    const {
      connectDropTarget,
      isOver,
      area,
      id,
      me,
      cards,
      moveCardFrom
    } = this.props

    const classes = classNames('zone', area, { me, isOver })
    const card = cards.first().set('faceDown', true)

    return connectDropTarget(
      <div className={classes} onClick={this.openModal}>
        <Card id={id} me={me} card={card} area={area} />
        {this.renderModal()}
      </div>
    )
  },
})

export default DropTarget(ItemTypes.CARD, zoneTarget, collect)(StackZone)