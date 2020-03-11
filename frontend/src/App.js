import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducers from './store/reducers/index';
import createSagaMiddleware from 'redux-saga';
import Character from './components/Character';
import index from './sagas/index'
import { put } from 'redux-saga/effects';
import axios from 'axios';
import { ts, publicKey, hash, baseURL } from './services/api'
import { loadDataCharacterSuccess } from './store/actions';
import Home from './pages/Home';
import Header from './components/Header'

//Instancia do SagaMiddleware pra chamar depois
const sagaMiddleware = createSagaMiddleware();

//Criando a Store que vai armazenar os estados, e passando o reducers que recebem as actions e estados e processam.
//Middleware Logger mostra no console de Dev as actions e seu previous state e next state, Saga para requisições.
let store = createStore(
  reducers,
  applyMiddleware(logger, sagaMiddleware)
)

function* getCharacters() {
  const dados = yield axios.get(`${baseURL}characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
  yield put(loadDataCharacterSuccess(dados.data.data.results))
}

sagaMiddleware.run(getCharacters)

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
