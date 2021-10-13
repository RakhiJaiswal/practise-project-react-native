import {CATEGORY, FETCH_API, FETCH_API_REQUEST} from '../actions/ActionTypes';

const initialState = {
  apiData: [],
  isloading: true,
  categoryData: [],
};

export const fetchApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_API:
      return {...state, apiData: action.payload};
    case FETCH_API_REQUEST:
      return {...state, isloading: false};
    case CATEGORY:
      const productList = state.apiData.filter(
        item => item.category === action.payload,
      );
      return {...state, categoryData: productList};
    default:
      return state;
  }
};
