import {put, takeLatest, all} from 'redux-saga/effects';
import {FETCH_API, FETCH_API_REQUEST} from '../actions/ActionTypes';

function* fetchingDataFromApi(action) {
  const url = 'https://fakestoreapi.com/products';
  const data = yield fetch(url)
    .then(response => response.json())
    .then(data1 => data1)
    .catch(e => console.log(e));

  yield put({type: FETCH_API, payload: data});
}
function* actionWatcher() {
  yield takeLatest(FETCH_API_REQUEST, fetchingDataFromApi);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
