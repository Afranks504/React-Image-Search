import React from 'react';

const ImageList = ({ imageResults }) => {
  console.log("llok: ", imageResults)
  const images = imageResults.map((image) => {
    return(
      <div
        className="col-lg-3 col-md-4 col-sm-6 col-xs-6 image-card-container"
        key={image.id}>
        <div className="image-card">
          <div className="thumbnail-img">
            <img src={image.previewURL} alt={image.tags} />
          </div>
          <div className="desc-box">
            <span>Likes: {image.likes}</span><br />
            <span>Favorites: {image.favorites}</span>
          </div>
        </div>
      </div>
    )
  });

  return (
      <div className="col-lg-10 image-list-container">
        <div className="row">
          {images}
        </div>
      </div>
  );
}

export default ImageList;
