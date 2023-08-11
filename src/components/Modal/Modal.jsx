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

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, imageUrl } = this.props;

    return (
      <>
        {isOpen && (
          <ModalOverlay onClick={this.handleBackdropClick}>
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
