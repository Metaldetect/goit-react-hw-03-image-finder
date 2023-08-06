import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryContainer, ImageGalleryUl } from './ImageGalleryStyles';

class ImageGallery extends Component {
  state = {
    columns: 3,
  };

  handleImageClick = largeImageURL => {
    // Handle the click event for the image to display the larger version.
    // For example, you can use a modal or a lightbox to show the larger image.
    console.log('Clicked on the image with largeImageURL:', largeImageURL);
    // Implement your logic to show the larger image in a modal or lightbox.
  };

  handleLoadMore = () => {
    // Call the loadMore prop function provided by the parent component (App)
    // This function will fetch the next page of products based on the search term.
    this.props.loadMore();
  };

  render() {
    const { images, isLoading, error, showModal, selectedImage, isLastPage } =
      this.props;

    return (
      <ImageGalleryContainer>
        <ImageGalleryUl>
          {error && <div>Error: {error}</div>}
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              onClick={() => this.handleImageClick(image.largeImageURL)}
            ></ImageGalleryItem>
          ))}
        </ImageGalleryUl>
        {isLoading && <div>Loading...</div>}
        {!isLoading && !isLastPage && (
          <button onClick={this.handleLoadMore}>Load More</button>
        )}
        {showModal && (
          /* Implement your modal or lightbox here to show the larger image */
          <div>Modal or Lightbox Content Here</div>
        )}
      </ImageGalleryContainer>
    );
  }
}

export default ImageGallery;
