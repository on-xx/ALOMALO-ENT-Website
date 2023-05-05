import { Link } from "react-scroll"

import Footer from "../components/Footer"
import ImageArtistGrid from "../components/ImageArtistGrid"
import ArtistProfileGallery from "../components/ArtistProfileGallery"
import { useState, useEffect, useRef } from "react"

const ArtistPage = () => {
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
                        <ImageArtistGrid onSelectArtist={handleSelectArtist} />
                    </Link>
                    <div ref={galleryRef}>
                        <ArtistProfileGallery selectedArtist={selectedArtist} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
        
    )
}

export default ArtistPage