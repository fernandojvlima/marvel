import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducers from './store/reducers/index'
import Info from './components/Info'

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  reducers,
  applyMiddleware(logger, sagaMiddleware)
)

function* ola() {
  console.log('hello from saga')
}
sagaMiddleware.run(ola)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Info />
        </div>
      </Provider>
    );
  }
}

export default App;
