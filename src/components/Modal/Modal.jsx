import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalOverlay, ModalContent, ModalImg } from './ModalStyles';

class ImageModal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, imageUrl, onClose } = this.props;

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
  }
}

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
