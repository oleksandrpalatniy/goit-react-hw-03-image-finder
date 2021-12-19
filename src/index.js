import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import styles from './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App className={styles.App} />
  </React.StrictMode>,
  document.getElementById('root'),
);
