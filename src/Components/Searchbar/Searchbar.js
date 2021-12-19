import { Component } from 'react';
import styles from './searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    imageFindName: '',
    imagePage: '',
  };
  handleNameChange = event => {
    this.setState({ imageFindName: event.currentTarget.value.toLowerCase() });
    this.setState({ imagePage: this.props.imagePage });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imageFindName.trim() === '') {
      alert('Please enter name of image...');
      return;
    }
    this.props.onSubmit(this.state.imageFindName, this.state.imagePage);

    this.setState({ imageFindName: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_button_label}>Search</span>
          </button>

          <input
            value={this.state.imageFindName}
            onChange={this.handleNameChange}
            className={styles.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
