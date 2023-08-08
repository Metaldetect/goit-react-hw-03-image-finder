import React, { Component } from 'react';
import { AppContainer } from './AppStyles';
import getProducts from '../../Api/Api';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import ImageModal from '../Modal/Modal';

class App extends Component {
  state = {
    searchTerm: '',
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    isLastPage: false,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ images: [], page: 1, isLastPage: false }, () => {
        this.fetchImages();
      });
    }
  }

  handleSearchSubmit = async query => {
    if (this.state.searchTerm === query) {
      return;
    }

    this.setState({
      searchTerm: query,
      images: [],
      isLoading: true,
      error: null,
      page: 1,
      isLastPage: false,
    });

    try {
      const { images, message, isLastPage } = await getProducts(query, 1);
      this.setState({
        images,
        error: message,
        isLastPage,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        error: 'Error fetching products. Please try again.',
        isLoading: false,
      });
    }
  };

  fetchImages = async () => {
    const { searchTerm, page } = this.state;

    this.setState({ isLoading: true });

    try {
      const { images, message, isLastPage } = await getProducts(
        searchTerm,
        page
      );
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        error: message,
        isLastPage,
        isLoading: false,
        page: prevState.page + 1,
      }));
    } catch (error) {
      this.setState({
        error: 'Error fetching products. Please try again.',
        isLoading: false,
      });
    }
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  handleImageClick = selectedImage => {
    this.setState({ showModal: true, selectedImage });
  };

  closeImageModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  render() {
    const { images, isLoading, error, showModal, selectedImage, isLastPage } =
      this.state;

    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery
          images={images}
          isLoading={isLoading}
          error={error}
          onItemClick={this.handleImageClick}
        />
        {showModal && (
          <ImageModal
            isOpen={showModal}
            imageUrl={selectedImage}
            onClose={this.closeImageModal}
          />
        )}
        {!isLoading && images.length > 0 && !isLastPage && (
          <Button onClick={this.handleLoadMore} />
        )}
      </AppContainer>
    );
  }
}

export default App;
