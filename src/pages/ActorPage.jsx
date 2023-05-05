import { Link } from "react-scroll";

import FooterActorPage from "../components/FooterActorPage";
import ImageActorGrid from "../components/ImageActorGrid";
import ArtistProfileGallery from "../components/ArtistProfileGallery";
import { useState, useEffect, useRef } from "react";

const ActorPage = () => {
  const [selectedArtist, setSelectedArtist] = useState("");
  const galleryRef = useRef(null);

  const handleSelectArtist = (artist) => {
    setSelectedArtist(artist);
  };

  useEffect(() => {
    if (selectedArtist !== "") {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedArtist]);

  return (
    <>
      <div id="artist-page">
        <div className="artist-page container">
          <Link to="artist-profile-gallery" smooth={true}>
            <ImageActorGrid onSelectArtist={handleSelectArtist} />
          </Link>
          <div ref={galleryRef}>
            <ArtistProfileGallery selectedArtist={selectedArtist} />
          </div>
        </div>
      </div>
      <FooterActorPage/>
    </>
  );
};

export default ActorPage;
