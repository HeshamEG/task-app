import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { WrappedApp } from "App";
import { store, history } from "core/store";

import "fontsource-roboto/500.css";
import "toasted-notes/src/styles.css";
import "core/utils/windowObj";
import { ConnectedRouter } from 'connected-react-router'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Suspense fallback={<div></div>}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <WrappedApp history={history} />
      </ConnectedRouter>
    </Provider>
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
