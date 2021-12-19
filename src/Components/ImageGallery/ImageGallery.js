import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './imageGallery.module.css';

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className={styles.ImageGallery}>
        <ImageGalleryItem
          imageName={this.props.imageName}
          imagePage={this.props.imagePage}
        />
      </ul>
    );
  }
}
