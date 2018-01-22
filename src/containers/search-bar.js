import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchImages } from '../actions/index';
import axios from 'axios';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();

    const API_KEY = '4329057-32f29fac6b16aaa05d4f4322f';
    const page = 5;
    const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${this.state.term}&page=${page}`;

    axios.get(API_URL).then(({ data }) => {
      this.props.fetchImages(data);
    });
  }

  render() {
    return (
      <div className="row top-nav">
        <div className="search-bar mx-auto col-lg-6">
          <form className="input-group" onSubmit={this.onFormSubmit}>
            <input
              placeholder="Enter a search term"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">Search</button>
            </span>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchImages }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
