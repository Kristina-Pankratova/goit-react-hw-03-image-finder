import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ imgList, onClickModal }) {
  return imgList.map(({ id, webformatURL, tags, largeImageURL }) => (
    <li key={id} className={s.imageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        onClick={onClickModal}
        srcSet={largeImageURL}
        className={s.galleryItemImage}
      />
    </li>
  ));
}

ImageGalleryItem.propTypes = PropTypes.shape({
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClickModal: PropTypes.func.isRequired,
}).isRequired;
