import { Link } from "react-scroll"

import ImageGrid from "../components/ImageGrid"
import ArtistProfileGallery from "../components/ArtistProfileGallery"
import { useState } from "react"

const ArtistPage = () => {
    const [selectedArtist, setSelectedArtist] = useState("kangmingil");


    const handleSelectArtist = (artist) => {
        setSelectedArtist(artist);
    };

    return (
        <div id="artist-page">
            <div className="artist-page container">
                <Link to="artist-profile-gallery" smooth={true}>
                    <ImageGrid onSelectArtist={handleSelectArtist} />
                </Link>
                <ArtistProfileGallery selectedArtist={selectedArtist} />
            </div>
        </div>
    )
}

export default ArtistPage