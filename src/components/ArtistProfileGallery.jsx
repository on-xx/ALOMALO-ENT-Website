import { galleryHandler } from "../utils/myFunction.js"
import artistData from "../data/artistData.js"

const ArtistProfileGallery = ({ selectedArtist }) => {

    const currentArtist = artistData.find(artist => artist.artist === selectedArtist);

    if(selectedArtist == "") {
        return (<div></div>)
    } else {

    

    return (
        <div id="artist-profile-gallery">
            <div className="artist-profile-gallery container">
                <div className="artist flex-row">
                    <div className="artist-profile-images flex-column">
                        <div className="img-container">
                            {<img src={currentArtist.images[0]} id="imageBox" alt="" />}
                        </div>
                        <div className="artist-small-img flex-row">
                            {currentArtist.images.map((image, index) => (
                                <img key={index} src={image} alt={`Image ${index}`} onClick={(e) => galleryHandler(e.target)} />
                            ))}
                        </div>
                    </div>

                    <div className="artist-detail flex-column">
                        <h1>{currentArtist.korName}</h1>
                        <h2>{currentArtist.engName}</h2>
                        <div className="artist-detail-row flex-row">
                            <div className="artist-detail-col-1 flex-column">
                                {(currentArtist.drama && currentArtist.drama.length > 0) && (
                                    <>
                                        <h3>드라마</h3>
                                        {currentArtist.drama.map((drama, index) => (
                                            <p key={index}>{drama}</p>
                                        ))}
                                    </>

                                )}

                                {(currentArtist.plays && currentArtist.plays.length > 0) && (
                                    <>
                                        <h3>연극</h3>
                                        {currentArtist.plays.map((play, index) => (
                                            <p key={index}>{play}</p>
                                        ))}
                                    </>

                                )}

                                {(currentArtist.musics && currentArtist.musics.length > 0) && (
                                    <>
                                        <h3>음원</h3>
                                        {currentArtist.musics.map((music, index) => (
                                            <p key={index}>{music}</p>
                                        ))}
                                    </>

                                )}

                                



                            </div>

                            <div className="artist-detail-col-2 flex-column">
                                {(currentArtist.movies && currentArtist.movies.length > 0) && (
                                    <>
                                        <h3>영화</h3>
                                        {currentArtist.movies.map((movie, index) => (
                                            <p key={index}>{movie}</p>
                                        ))}
                                    </>

                                )}

                                {(currentArtist.advs && currentArtist.advs.length > 0) && (
                                    <>
                                        <h3>광고</h3>
                                        {currentArtist.advs.map((adv, index) => (
                                            <p key={index}>{adv}</p>
                                        ))}
                                    </>

                                )}

                                {(currentArtist.tvshows && currentArtist.tvshows.length > 0) && (
                                    <>
                                        <h3>TV 프로그램</h3>
                                        {currentArtist.tvshows.map((tvshow, index) => (
                                            <p key={index}>{tvshow}</p>
                                        ))}
                                    </>

                                )}

                                {(currentArtist.musicals && currentArtist.musicals.length > 0) && (
                                    <>
                                        <h3>뮤지컬</h3>
                                        {currentArtist.musicals.map((musical, index) => (
                                            <p key={index}>{musical}</p>
                                        ))}
                                    </>

                                )}

                                {(currentArtist.shorts && currentArtist.shorts.length > 0) && (
                                    <>
                                        <h3>단편</h3>
                                        {currentArtist.shorts.map((short, index) => (
                                            <p key={index}>{short}</p>
                                        ))}
                                    </>

                                )}

{(currentArtist.careers && currentArtist.careers.length > 0) && (
                                    <>
                                        <h3>기타</h3>
                                        {currentArtist.careers.map((career, index) => (
                                            <p key={index}>{career}</p>
                                        ))}
                                    </>

                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    ) }
}

export default ArtistProfileGallery