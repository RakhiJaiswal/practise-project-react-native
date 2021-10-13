import {combineReducers} from 'redux';
import {fetchApiReducer} from './FetchApiReducer';
import {ThemeReducer} from './ThemeReducer';

export default combineReducers({
  fetchApiReducer,
  ThemeReducer,
});
