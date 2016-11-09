import { combineReducers } from 'redux';

import hosts from './hosts/reducer';
import invites from './invites/reducer';
import queries from './queries/reducer';
import users from './users/reducer';

export default combineReducers({
  hosts,
  invites,
  queries,
  users,
});