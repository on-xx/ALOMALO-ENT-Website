const ImageArtistGrid = ({ onSelectArtist }) => {
  const handleImageClick = (artist) => {
    onSelectArtist(artist);
  };

  return (
    <div id="image-grid">
      <div className="image-grid container">
        <div className="image-grid-wrapper image-grid-artist-wrapper">
          <div className="image-grid-item">
            <img
              src="./img/gridimg/goonjo.jpg"
              alt=""
              onClick={() => handleImageClick("goonjo")}
            />
            <div className="image-grid-overlay">
              <div className="image-grid-overlay-text">군조</div>
            </div>
          </div>

          <div className="image-grid-item">
            <img
              src="./img/gridimg/shinjimin.jpg"
              alt=""
              onClick={() => handleImageClick("shinjimin")}
            />
            <div className="image-grid-overlay">
              <div className="image-grid-overlay-text">신지민</div>
            </div>
          </div>

          <div className="image-grid-item">
            <img
              src="./img/gridimg/yangseungho.jpg"
              alt=""
              onClick={() => handleImageClick("yangseungho")}
            />
            <div className="image-grid-overlay">
              <div className="image-grid-overlay-text">양승호</div>
            </div>
          </div>

          <div className="image-grid-item image-grid-artist-logo">
            <img src="./img/logo2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageArtistGrid;
