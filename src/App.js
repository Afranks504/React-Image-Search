import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ImageList from './containers/image-list';
import SearchHistory from './components/search-history';
import SearchBar from './containers/search-bar';
import { fetchImages } from './actions/index';
import './App.css';

class App extends Component {
  render() {
    console.log('Rendering with: ', this.props);
    return (
      <div className="App container-fluid">
        <SearchBar images={this.props.images}/>
        <div className="container">
          <div className="row">
            {/* <SearchHistory searchHistory={this.props.history} /> */}
            <ImageList images={this.props.images} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(props) {
  return props;
}

export default connect(mapStateToProps)(App);
