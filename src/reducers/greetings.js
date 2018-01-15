import { handleActions } from 'redux-actions';

import Greetings from '../models/Greetings';

const initialState = new Greetings();

export default handleActions(
  {
    [ActionTypes.ADD_GREETING](greetings, action) {
      return greetings.push(action.data);
    },
  },
  initialState
);

