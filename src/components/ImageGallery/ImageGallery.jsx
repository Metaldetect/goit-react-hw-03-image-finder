import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryContainer, ImageGalleryUl } from './ImageGalleryStyles';
import { nanoid } from 'nanoid';

const ImageGallery = ({ images, onItemClick }) => {
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
  onItemClick: PropTypes.func.isRequired,
};
export default ImageGallery;
