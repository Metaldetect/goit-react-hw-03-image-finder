import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryContainer, ImageGalleryUl } from './ImageGalleryStyles';
import LoadingSpinner from '../Loader/Loader';
import { nanoid } from 'nanoid';

const ImageGallery = ({ images, onItemClick, isLoading }) => {
  return (
    <ImageGalleryContainer>
      <ImageGalleryUl>
        {images.map(image => (
          <ImageGalleryItem
            key={nanoid()}
            image={image}
            onItemClick={onItemClick}
          />
        ))}
      </ImageGalleryUl>
      {isLoading && <LoadingSpinner size={50} />}
    </ImageGalleryContainer>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  onItemClick: PropTypes.func.isRequired,
};
export default ImageGallery;
