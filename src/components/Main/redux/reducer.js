import * as ActionTypes from './actionTypes';

/* Initial states */
const INITIAL_STATE = {
  data: null
} 

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.GET_FORM:
      return {
        ...state,
        data: action.payload
      };
    
      case ActionTypes.SET_FORM:
        return {
          ...state,
          data: action.payload
        };

    default:
      return state;
  }
}
