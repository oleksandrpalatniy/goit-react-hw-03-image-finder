import { Component } from 'react';
import styles from './button.module.css';

export default class Button extends Component {
  state = {
    imagePage: this.props.imagePage,
  };

  handleSubmitButton = event => {
    event.preventDefault();

    this.props.onClick(this.state.imagePage);
  };
  render() {
    return (
      <div className={styles.Button_container}>
        <button
          type="submit"
          className={styles.Button}
          onClick={this.handleSubmitButton}
        >
          Load more...
        </button>
      </div>
    );
  }
}
