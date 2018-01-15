import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/root';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
)(createStore);

const configureStore = function (initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
};

export default configureStore;
