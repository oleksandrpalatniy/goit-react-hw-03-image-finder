import { Component } from 'react';
import styles from './imageGalleryItem.module.css';

import Modal from '../Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    largeImageURL: '',
    largeImageTags: '',
  };
  handleImageItemClick = e => {
    this.setState({ largeImageURL: e.item.largeImageURL });
    this.setState({ largeImageTags: e.item.tags });
  };
  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { largeImageURL, largeImageTags, showModal } = this.state;
    return (
      <>
        {this.props.imageListArr.map(item => (
          <li
            key={item.id}
            className={styles.ImageGalleryItem}
            onClick={() => {
              this.handleImageItemClick({ item });
              this.toggleModal();
            }}
          >
            <img
              src={item.webformatURL}
              alt={item.tags}
              id={item.id}
              className={styles.ImageGalleryItem_image}
            />
          </li>
        ))}
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeUrl={largeImageURL}
            tag={largeImageTags}
          ></Modal>
        )}
      </>
    );
  }
}
