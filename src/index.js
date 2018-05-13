import React from 'react'
import { render } from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import reducer from './redux/reducers/root'
import GameContainer from './components/GameContainer'
import GameMiddleware from './middleware/GameMiddleware'
import setupSocket from './sockets'
//import handleGameUpdates from './sagas/handleGameUpdates'
import './styles/index.css'
import './styles/field.css'

//const saga = createSagaMiddleware()
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

window.crazySocket = setupSocket(store.dispatch)
//saga.run(handleGameUpdates, { socket, userId: 123 })

render(
  <Provider store={store}>
    <GameContainer />
  </Provider>,
  document.getElementById('root')
)
