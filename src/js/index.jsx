import '../sass/main.scss';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';
import { enableLogging } from 'mobx-logger';
import { Provider } from 'mobx-react';
import App from './components/App.jsx';
import stores from './store';

// For easier debugging
window._____APP_STATE_____ = stores;


ReactDOM.render(
  <Provider {...stores} >
    <Fragment>
      <DevTools />
      <App />
    </Fragment>
  </Provider>
  ,
  document.getElementById('app')
);

  enableLogging();
