import { Component } from 'react';
import styles from './imageGalleryItem.module.css';
import fetchAPI from '../Fetch/Fetch';
import Modal from '../Modal/Modal';
import LoaderSpinner from '../Loader/Loader';

export default class ImageGalleryItem extends Component {
  state = {
    imageListArr: [],
    showModal: false,
    largeImageURL: '',
    largeImageTags: '',
    error: '',
    spinner: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.imageName !== this.props.imageName ||
      prevProps.imagePage !== this.props.imagePage
    ) {
      this.setState({ spinner: true });
      fetchAPI
        .fetchImage(this.props.imageName, this.props.imagePage)
        .then(imageList => this.setState({ imageListArr: imageList.hits }))
        .catch(() => alert('dsgs'))
        .finally(() => this.setState({ spinner: false }));
    }
  }
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
    const { imageListArr, spinner, largeImageURL, largeImageTags, showModal } =
      this.state;
    return (
      <>
        {imageListArr.length > 0}
        {spinner && <LoaderSpinner />}
        {imageListArr.map(item => (
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
