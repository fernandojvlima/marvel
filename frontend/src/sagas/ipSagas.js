import { put } from 'redux-saga/effects';
import { loadDataSuccess } from '../store/actions/index.js'
import axios from 'axios';

function* getIP() {
  const dados = yield axios.get('http://httpbin.org/ip')
  yield put(loadDataSuccess(dados.data.origin))
}

export default getIP;