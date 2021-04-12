import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import ru_Ru from 'antd/lib/locale/ru_RU';

const app = (
  <ConfigProvider locale={ru_Ru}>
    <App />
  </ConfigProvider>
);

ReactDOM.render(app, document.getElementById('root'));
