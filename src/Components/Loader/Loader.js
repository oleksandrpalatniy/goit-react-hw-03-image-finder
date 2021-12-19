import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { Component } from 'react';
import styles from './loader.module.css';

export default class LoaderSpinner extends Component {
  //other logic
  render() {
    return (
      <Loader
        className={styles.LoaderSpinner}
        type="Bars"
        color="#00BFFF"
        height={100}
        width={100}
        //  timeout={3000} //3 secs
      />
    );
  }
}
