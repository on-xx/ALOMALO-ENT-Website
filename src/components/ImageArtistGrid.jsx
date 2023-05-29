import artistGridData from "../data/artistGridData";
import GridItem from "./GridItem";

const ImageArtistGrid = ({ onSelectArtist }) => {

  return (
    <div id="image-grid">
      <div className="image-grid container">
        <div className="image-grid-wrapper image-grid-artist-wrapper">
          {artistGridData.map((data) => {
            return <GridItem image={data.image} name={data.name} engname={data.engname} onSelectArtist={onSelectArtist}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageArtistGrid;
