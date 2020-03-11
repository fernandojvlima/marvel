
import { put } from 'redux-saga/effects';
import { loadDataCharacterSuccess } from '../store/actions/index.js'
import { ts, publicKey, hash, baseURL } from '../services/api'
import axios from 'axios';

function* getCharacters() {
  const dados = yield axios.get(`${baseURL}characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
  yield put(loadDataCharacterSuccess(dados.data.data.results))
}

export default getCharacters;

