import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './imageGallery.module.css';
import fetchAPI from '../Fetch/Fetch';
import LoaderSpinner from '../Loader/Loader';

export default class ImageGallery extends Component {
  state = {
    imageListArr: [],
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
        .catch(() => alert(''))
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
    const { imageListArr, spinner } = this.state;
    return (
      <>
        {spinner && <LoaderSpinner />}
        <ul className={styles.ImageGallery}>
          <ImageGalleryItem imageListArr={imageListArr} />
        </ul>
      </>
    );
  }
}
