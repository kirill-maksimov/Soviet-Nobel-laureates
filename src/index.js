import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import reducer from './store/reducer';
import rootSaga from './store/rootSaga';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './app/App';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  [],
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
