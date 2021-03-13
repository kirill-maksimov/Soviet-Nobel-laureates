import { all } from 'redux-saga/effects';
import tableSagas from "../table/table.saga";

export default function* rootSaga() {
  yield all([
    tableSagas(),
  ]);
}
