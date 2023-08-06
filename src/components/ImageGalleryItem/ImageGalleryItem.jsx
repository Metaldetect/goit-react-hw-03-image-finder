import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageGaletyItemLi,
  ImageGaletyItemImg,
} from './ImageGalleryItemStyles';

const ImageGalleryItem = ({ image, onClick }) => {
  const { id, webformatURL, largeImageURL } = image;

  const handleImageClick = () => {
    // Call the onClick function provided by the parent component (ImageGallery)
    // This function will handle the click event for the image, e.g., showing the larger version.
    onClick(largeImageURL);
  };

  return (
    <ImageGaletyItemLi onClick={handleImageClick}>
      <ImageGaletyItemImg src={webformatURL} id={id} />
    </ImageGaletyItemLi>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
