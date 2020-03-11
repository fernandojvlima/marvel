import { put } from 'redux-saga/effects';
import { loadDataUASuccess } from '../store/actions/index.js'
import axios from 'axios';

function* getUA() {
  const dados = yield axios.get('http://httpbin.org/user-agent')
  yield put(loadDataUASuccess(dados.data['user-agent']))

}

export default getUA;