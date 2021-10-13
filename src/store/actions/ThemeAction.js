import {SET_COLOR, RESET_COLOR, LANGUAGE} from './ActionTypes';

export const SetColorAction = data => {
  return {
    type: SET_COLOR,
    payload: data,
  };
};
export const ResetColorAction = () => {
  return {
    type: RESET_COLOR,
  };
};
export const LanguageAction = data => {
  return {
    type: LANGUAGE,
    payload: data,
  };
};
