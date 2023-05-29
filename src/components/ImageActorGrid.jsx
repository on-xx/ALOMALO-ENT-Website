import actorGridData from "../data/actorGridData";
import GridItem from "./GridItem";


const ImageActorGrid = ({ onSelectArtist }) => {
  const handleImageClick = (artist) => {
    onSelectArtist(artist);
  };

  return (
    <div id="image-grid">
      <div className="image-grid container">
        <div className="image-grid-wrapper">
        {actorGridData.map((data) => {
            return <GridItem image={data.image} name={data.name} engname={data.engname} onSelectArtist={onSelectArtist}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageActorGrid;
