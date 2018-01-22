import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchImages } from '../actions/index';
import axios from 'axios';
import _ from 'lodash';

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
    console.log(this.state.term);
    this.props.fetchImages(this.state.term)
    const that = this;

    // Delay update state method.
    _.delay(() => {
      that.props.images.then((res) => {
        console.log('BALLSDEEP! ', res.data.hits);
        // that.setState({ resolved: true, images: res.data.hits });
      })
    }, 500);
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
