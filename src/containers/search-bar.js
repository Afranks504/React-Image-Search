import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = { term: '' };
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();

    // TODO: create fetch from image API and set state.
    // this.props.fetchImages(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className="row">
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

export default SearchBar;
