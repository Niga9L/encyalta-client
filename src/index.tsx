import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import ru_Ru from 'antd/lib/locale/ru_RU';
import { createStore } from 'redux';
import { rootReducer } from './Redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Provider } from 'react-redux';

export const store = createStore(rootReducer, composeWithDevTools());

const app = (
  <Provider store={store}>
    <ConfigProvider locale={ru_Ru}>
      <App />
    </ConfigProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
