import { combineReducers } from 'redux';

/* import reducer files */
import MainReducer from '../components/Main/redux/reducer';

const Reducers = combineReducers({
  MainReducer,
});

export default Reducers;