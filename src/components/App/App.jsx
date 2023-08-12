import React, { Component } from 'react';
import { AppContainer } from './AppStyles';
import getProducts from '../../Api/Api';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import ImageModal from '../Modal/Modal';
import LoadingSpinner from '../Loader/Loader';

class App extends Component {
  state = {
    query: '',
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    isLastPage: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.fetchImages();
    }
  }
  handleSearchSubmit = query => {
    if (this.state.query === query) {
      return;
    }

    this.setState({
      query: query,
      images: [],
      isLoading: true,
      error: null,
      page: 1,
      isLastPage: false,
    });
  };

  fetchImages = async () => {
    const { query, page } = this.state;

    this.setState({ isLoading: true });

    try {
      const { images, message, isLastPage } = await getProducts(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        error: message,
        isLastPage,
        isLoading: false,
      }));
    } catch (error) {
      this.setState({
        error: 'Error fetching products. Please try again.',
        isLoading: false,
      });
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleImageClick = selectedImage => {
    this.setState({ showModal: true, selectedImage });
  };

  closeImageModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  render() {
    const { images, isLoading, showModal, selectedImage, isLastPage } =
      this.state;

    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onItemClick={this.handleImageClick} />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {showModal && (
              <ImageModal
                isOpen={showModal}
                imageUrl={selectedImage}
                onClose={this.closeImageModal}
              />
            )}
            {isLastPage && <Button onClick={this.handleLoadMore} />}
          </>
        )}
      </AppContainer>
    );
  }
}

export default App;
