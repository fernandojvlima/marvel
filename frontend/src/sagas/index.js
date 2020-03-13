import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import getDetails from './detailsSaga';

function* index() {
  yield [
    takeLatest('LOAD_DETAILS_REQUEST', getDetails, axios)
  ]
}

export default index;