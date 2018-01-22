import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ImageList from './components/image-list';
import SearchHistory from './components/search-history';
import SearchBar from './containers/search-bar';
import { fetchImages } from './actions/index';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      page: 5,
      history: ['BMW', 'Dogs', 'HD Wallpapers', 'tits']
    };
  }

  componentDidMount() {
    const API_KEY = '4329057-32f29fac6b16aaa05d4f4322f';
    const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=wallpaper&page=${this.state.page}`;

    axios.get(API_URL).then(({ data }) => {
      this.setState({ images: data });
    });
  }

  // renderImageCards(term, page) {
  //   const API_KEY = '4329057-32f29fac6b16aaa05d4f4322f';
  //   const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${term}&page=${page}`;
  //
  //   axios.get(API_URL).then(({ data }) => {
  //     this.props.fetchWeather(term);
  //   });
  // }

  render() {
    console.log('RENDERING');
    return (
      <div className="App container-fluid">
        <SearchBar />
        <div className="container">
          <div className="row">
            <SearchHistory searchHistory={this.state.history} />
            <ImageList images={this.state.images} />
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
