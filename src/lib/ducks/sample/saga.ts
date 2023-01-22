import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import * as sampleTypes from './types';
import { SampleRequestedAction } from './actions';

function* handleGetSamples(action: SampleRequestedAction) {
    console.log("Saga Action Called: ", action);
}

export default function* sampleSaga() {
  yield takeLatest(sampleTypes.SAMPLES_REQUESTED, handleGetSamples);
}