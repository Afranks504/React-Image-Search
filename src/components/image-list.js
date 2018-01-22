import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/index';
import _ from 'lodash';

class ImageList extends Component {
  constructor(props) {
    super(props);

    this.state = { resolved: false };
  }

  componentDidMount() {
    const that = this;
    console.log('mounted')
    _.delay(function() {
      console.log("!!: ", that.props.images);
      that.setState({ resolved: true });
    }, 500);
  }


  renderImages(imageData) {
    return(
      <a
        href={imageData.webformatURL}
        target="_blank"
        className="col-lg-3 col-md-4 col-sm-6 col-xs-6 image-card-container"
        key={imageData.id}>
        <div className="image-card">
          <div className="thumbnail-img">
            <img src={imageData.previewURL} alt={imageData.tags} />
          </div>
          <div className="desc-box">
            <span>Likes: {imageData.likes}</span><br />
            <span>Favorites: {imageData.favorites}</span>
          </div>
        </div>
      </a>
    );
  }

  render() {
    console.log(this.props);
    return (
      <div className="col-lg-10 image-list-container">
        <div className="row">
          {this.state.resolved ? this.props.images.hits.map(this.renderImages) : "Loading..."}
        </div>
      </div>
    );
  }
}

export default ImageList;
