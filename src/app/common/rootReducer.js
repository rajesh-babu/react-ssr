import { combineReducers } from 'redux';
import { NODE } from '@config';
import todos from '@pages/Todos/reducers';
import cmsData from '@pages/Home/reducers';

// eslint-disable-next-line no-unused-vars
const isClient = (state = false, action) => (state = NODE !== true);

// add more reducers here if we have any
const rootReducer = combineReducers({
  isClient,
  todos,
  cmsData
});

export default rootReducer;
