import {LANGUAGE, SET_COLOR} from '../actions/ActionTypes';
import {RESET_COLOR} from '../actions/ActionTypes';

const initialState = {
  color: 'blue',
  language: 'English',
};

export const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR:
      return {...state, color: action.payload};
    case RESET_COLOR:
      return {...state, color: initialState.color};
    case LANGUAGE:
      return {...state, language: action.payload};
    default:
      return state;
  }
};
