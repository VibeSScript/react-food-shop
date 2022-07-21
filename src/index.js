import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './App';
import { StrictMode } from "react";
import GoogleMap from './components/common/GoogleMap/GoogleMap';

ReactDOM.render(
  <StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
    <div className='GoogleMap'>
    <GoogleMap></GoogleMap>
    </div>
  </Provider>,
</StrictMode>,
  document.getElementById('root')
);
