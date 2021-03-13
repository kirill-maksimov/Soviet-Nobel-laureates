import {put, takeEvery, all, call} from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_LAUREATS, GET_LAUREATS_SUCCESS, GET_LAUREATS_ERROR,
} from "../consts/actions-types";

export function* getLaureatsSaga() {
  try {
    const response = yield call(axios.get, 'http://api.nobelprize.org/v1/laureate.json');
    const result = response.data.laureates
      .filter(laureate => laureate.bornCountry && laureate.bornCountry.includes('Russia'));
    yield put({ type: GET_LAUREATS_SUCCESS, result });
  } catch (error) {
    console.error(error);
    yield put({ type: GET_LAUREATS_ERROR, error });
  }
}

export default function* tableSagas() {
  yield all([
    takeEvery(GET_LAUREATS, getLaureatsSaga),
  ]);
};