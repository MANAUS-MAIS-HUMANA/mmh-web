import { combineReducers } from 'redux';

import dashboard from './dashboard/reducer';
import login from './login/reducer';

export default combineReducers({
  dashboard,
  login,
});
