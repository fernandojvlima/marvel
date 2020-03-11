import { put } from 'redux-saga/effects';
import { loadDataUASuccess } from '../store/actions/index.js'

function* getUA(axios) {
  const dados = yield axios.get('http://httpbin.org/user-agent')
  yield put(loadDataUASuccess(dados.data['user-agent']))

}

export default getUA;