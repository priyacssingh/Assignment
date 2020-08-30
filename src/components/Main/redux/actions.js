import * as ActionTypes from './actionTypes';

export const setForm = (data) => {
    return {
        type: ActionTypes.SET_FORM,
        payload: data,
      }
}

export const getForm = () => {
  return {
      type: ActionTypes.GET_FORM,
      payload,
    }
}