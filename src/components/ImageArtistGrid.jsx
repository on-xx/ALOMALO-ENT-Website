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
            />
            <div className="image-grid-overlay" onClick={() => handleImageClick("goonjo")}>
              <div className="image-grid-overlay-text">KOONJO</div>
            </div>
          </div>

          <div className="image-grid-item">
            <img
              src="./img/gridimg/shinjimin.jpg"
              alt=""
              
            />
            <div className="image-grid-overlay" onClick={() => handleImageClick("shinjimin")}>
              <div className="image-grid-overlay-text">SHIN JIMIN</div>
            </div>
          </div>

          <div className="image-grid-item">
            <img
              src="./img/gridimg/yangseungho.jpg"
              alt=""
              
            />
            <div className="image-grid-overlay" onClick={() => handleImageClick("yangseungho")}>
              <div className="image-grid-overlay-text">YANG SEUNGHO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageArtistGrid;
