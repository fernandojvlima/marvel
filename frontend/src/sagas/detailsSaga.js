import { put } from 'redux-saga/effects';
import { loadDetailsSuccess } from '../store/actions/index.js'
import axios from 'axios';
import { ts, publicKey, hash, baseURL } from '../services/api'

function* getDetails(id) {
  const dados = yield axios.get(`${baseURL}characters?ts=${ts}&apikey=${publicKey}&hash=${hash}/${id}/series`)
  yield put(loadDetailsSuccess(dados.data))
}

export default getDetails;