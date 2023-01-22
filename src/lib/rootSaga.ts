import { all, fork } from "redux-saga/effects";
import sampleSaga from "./ducks/sample/saga";

export default function* rootSaga() {
  yield all([fork(sampleSaga)]);
}
