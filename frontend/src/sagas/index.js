import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import getIP from './ipSagas';
import getUA from './uaSagas';
import getDetails from './detailsSaga';

function* index() {
  yield [

    takeLatest('LOAD_DATA_REQUEST', getIP, axios),
    takeLatest('LOAD_DATA_UA_REQUEST', getUA, axios),
    takeLatest('LOAD_DETAILS_REQUEST', getDetails, axios)
  ]
}

export default index;