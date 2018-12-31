import React from 'react'
import { render } from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './redux/reducers/root'
import GameContainer from './components/GameContainer'
import GameMiddleware from './middleware/GameMiddleware'
import setupSocket from './sockets'
import './styles/index.css'
import './styles/field.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

window.crazySocket = setupSocket(store.dispatch)

render(
  <Provider store={store}>
    <GameContainer />
  </Provider>,
  document.getElementById('root')
)
