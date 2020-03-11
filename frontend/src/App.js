import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducers from './store/reducers/index';
import indexSaga from './sagas/index'
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  reducers,
  applyMiddleware(logger, sagaMiddleware)
)

sagaMiddleware.run(indexSaga)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Ola</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
