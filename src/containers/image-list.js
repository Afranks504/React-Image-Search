import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchImages } from '../actions/index';
import _ from 'lodash';

class ImageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resolved: false,
      images: []
    };
  }

  componentDidMount() {
    console.log('mounted');
    const that = this;

    this.props.fetchImages('wallpaper');

    // Delay update state method.
    _.delay(() => {
      that.props.images.then((res) => {
        console.log('HELLO! ', res.data.hits);
        that.setState({ resolved: true, images: res.data.hits });
      })
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
    console.log("AYY: ", this.props);
    if(this.props.images.length) {
      console.log('test');
    }
    return (
      <div className="col-lg-10 image-list-container">
        <div className="row">
          {this.state.resolved ? this.state.images.map(this.renderImages) : "Loading..."}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of ImageList.
  return {
    images: state.images
  };
}

// Anything returned from this function will end up as props on the
// ImageList container.
function mapDispatchToProps(dispatch) {
  // Whenever fetchImages is called, the result should be passed
  // to all of our reducers.
  return bindActionCreators({ fetchImages: fetchImages }, dispatch);
}

// Promote ImageList from a component to a container - it needs to know
// about this new dispatch method, fetchImages. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
