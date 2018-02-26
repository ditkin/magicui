import React from 'react';
import { render } from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducer from './redux/reducers/root'
import GameContainer from './components/GameContainer'
import './styles/index.css';
import './styles/field.css';

const store = createStore(
	reducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

render((
  <Provider store={store}>
  	<GameContainer />
  </Provider>
),
  document.getElementById('root')
)
