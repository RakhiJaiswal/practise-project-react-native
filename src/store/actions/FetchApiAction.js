import {CATEGORY, FETCH_API, FETCH_API_REQUEST} from './ActionTypes';

export const FetchApiAction = data => {
  return {
    type: FETCH_API,
    payload: data,
  };
};

export const FetchApiRequest = () => {
  return {type: FETCH_API_REQUEST};
};

export const CategoryAction = data => {
  return {type: CATEGORY, payload: data};
};
