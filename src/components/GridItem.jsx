import React from "react";

const GridItem = ({ image, name, engname, onSelectArtist}) => {

  const handleImageClick = (artist) => {
    onSelectArtist(artist);
  };

  return (
    <div className="image-grid-item">
      <img src={image} alt="" />
      <div
        className="image-grid-overlay"
        onClick={() => 
          handleImageClick(engname)
        }
      >
        <div className="image-grid-overlay-text">{name}</div>
      </div>
    </div>
  );
};

export default GridItem;
