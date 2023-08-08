import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageGaletyItemLi,
  ImageGaletyItemImg,
} from './ImageGalleryItemStyles';

const ImageGalleryItem = ({ image, onItemClick }) => {
  const handleClick = () => {
    onItemClick(image.largeImageURL);
  };

  return (
    <ImageGaletyItemLi onClick={handleClick}>
      <ImageGaletyItemImg src={image.webformatURL} alt={image.tags} />
    </ImageGaletyItemLi>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
