import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
export default function ImageGallery({ imgList, onClickModal }) {
  return (
    <ul className={s.imageGallery}>
      <ImageGalleryItem imgList={imgList} onClickModal={onClickModal} />
    </ul>
  );
}

ImageGallery.propTypes = PropTypes.shape({
  imgList: PropTypes.array.isRequired,
  onClickModal: PropTypes.func.isRequired,
}).isRequired;
