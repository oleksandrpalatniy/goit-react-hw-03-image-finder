import styles from './imageGalleryItem.module.css';

export default function ImageGalleryItem({ imageListArr, onOpenModal }) {
  return (
    <>
      {imageListArr.map(item => (
        <li
          key={item.id}
          className={styles.ImageGalleryItem}
          onClick={() => onOpenModal(item)}
        >
          <img
            src={item.webformatURL}
            alt={item.tags}
            id={item.id}
            className={styles.ImageGalleryItem_image}
          />
        </li>
      ))}
    </>
  );
}
