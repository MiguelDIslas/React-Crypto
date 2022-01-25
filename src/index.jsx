import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';

//Ant Design
import 'antd/dist/antd.css';
// Store
import store from './app/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
