import React, { Component } from 'react';
import { AppContainer } from './AppStyles';
import getProducts from '../../Api/Api';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import Button from '../Button/Button';
// import Modal from '../Modal/Modal';
// import Loader from '../Loader/Loader';

class App extends Component {
  state = {
    searchTerm: '',
    products: [],
    images: [],
    isLoading: false,
    error: null,
    query: '',
    page: 1,
    showModal: false,
    selectedImage: null,
    isLastPage: false,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ images: [], page: 1, isLastPage: false }, () => {
        this.getProducts();
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
      const fetchedImages = await getProducts(query);
      this.setState({
        images: fetchedImages,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        error: 'Error fetching products. Please try again.',
        isLoading: false,
      });
    }
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
          showModal={showModal}
          selectedImage={selectedImage}
          isLastPage={isLastPage}
          loadMore={this.handleLoadMore}
        />
      </AppContainer>
    );
  }
}
export default App;
