import React from 'react'
import { render } from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './redux/reducers/root'
import IndexContainer from './components/IndexContainer'
import GameMiddleware from './middleware/GameMiddleware'
import { initSocket } from './sockets'
import './styles/index.css'
import './styles/field.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

initSocket(store.dispatch)

render(
  <Provider store={store}>
    <IndexContainer />
  </Provider>,
  document.getElementById('root')
)
