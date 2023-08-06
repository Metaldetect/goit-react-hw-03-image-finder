import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

import {
  SearchbarHead,
  SearchbarForm,
  SearchbarInput,
  SearchbarButton,
} from './SearchbarStyles';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.query.trim()) {
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchbarHead>
        <SearchbarForm onSubmit={this.handleSubmit}>
          <SearchbarButton type="submit">
            <FaSearch className="search-icon" />
          </SearchbarButton>

          <SearchbarInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search..."
            value={this.state.query}
            onChange={this.handleChange}
          />
        </SearchbarForm>
      </SearchbarHead>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
