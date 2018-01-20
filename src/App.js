import React, { Component } from 'react';
import axios from 'axios';
import ImageList from './components/image-list';
import SearchHistory from './components/search-history';
import SearchBar from './containers/search-bar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageResults: [],
      searchHistory: ['BMW', 'Dogs', 'HD Wallpapers', 'tits']
    };
  }

  componentDidMount() {
    console.log('Mounted.');
    this.renderImageCards('Wallpaper');
  }

  renderImageCards(term) {
    const API_KEY = '4329057-32f29fac6b16aaa05d4f4322f';
    let search_query = term;
    const API_URL = `https://pixabay.com/api/?q=${search_query}&key=${API_KEY}`;

    axios.get(API_URL).then(({ data }) => {
      this.setState({ imageResults: data.hits });
    });
  }

  render() {
    console.log(this.state.imageResults);
    return (
      <div className="App container">
        <SearchBar />
        <div className="row">
          <SearchHistory searchHistory={this.state.searchHistory} />
          <ImageList imageResults={this.state.imageResults} />
        </div>
      </div>
    );
  }
}

export default App;
