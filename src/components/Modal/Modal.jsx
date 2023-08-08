import React from 'react';
import PropTypes from 'prop-types';
import { ModalOverlay, ModalContent, ModalImg } from './ModalStyles';

const ImageModal = ({ isOpen, imageUrl, onClose }) => {
  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={onClose}>
          <ModalContent>
            <ModalImg src={imageUrl} alt="Large" />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
