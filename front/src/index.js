import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createStore from './reducks/store/store';
import ReactDOM from 'react-dom';
import './index.css';
import * as History from 'history';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/top.css';
import './assets/show.css';
import './assets/test.css';

const history = History.createBrowserHistory();
export const store = createStore(history);

ReactDOM.render(
  <Provider store = {store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
