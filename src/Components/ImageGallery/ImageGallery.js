import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './imageGallery.module.css';
import fetchAPI from '../Fetch/Fetch';
import LoaderSpinner from '../Loader/Loader';
import Modal from '../Modal/Modal';
export default class ImageGallery extends Component {
  state = {
    imageListArr: [],
    error: '',
    spinner: false,
    showModal: false,
    largeImageURL: '',
    largeImageTags: '',
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
        .catch(() => alert(''))
        .finally(() => this.setState({ spinner: false }));
    }
  }

  closeModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };
  toggleModal = item => {
    this.setState(state => ({
      showModal: !state.showModal,

      largeImageURL: item.largeImageURL,
      largeImageTags: item.tags,
    }));
  };

  render() {
    const { imageListArr, spinner } = this.state;
    return (
      <>
        {spinner && <LoaderSpinner />}
        <ul className={styles.ImageGallery}>
          <ImageGalleryItem
            imageListArr={imageListArr}
            onOpenModal={this.toggleModal}
          />
        </ul>
        {this.state.showModal && (
          <Modal
            onClose={this.closeModal}
            largeUrl={this.state.largeImageURL}
            tag={this.state.largeImageTags}
          ></Modal>
        )}
      </>
    );
  }
}
