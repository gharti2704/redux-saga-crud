import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {' '}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
