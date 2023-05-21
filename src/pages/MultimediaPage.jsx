import Footer from "../components/Footer";
import { useState, useEffect, useRef  } from "react";

const MultimediaPage = () => {

  const [selectedVideo, setSelectedVideo] = useState("Mc5g4k_AX8w");
  const videoMainRef = useRef(null);


  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  useEffect(() => {
    if (selectedVideo !== "") {
        videoMainRef.current.scrollIntoView({ behavior: "smooth" });
    }
}, [selectedVideo]);

  return (
    <>
      <div id="multimediapage">
        <div className="multimediapage container" >
          <div className="news-card-title-outside" ref={videoMainRef}>
            <h1>MULTIMEDIA</h1>
          </div>
          <div className="multimedia-video-main" >
            <iframe
              className="video-embed"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>

          <div className="multimedia-video-list flex-column">
            <div className="news-card-title-outside">
              <h1>LIST</h1>
            </div>
            <div className="multimedia-video-list-wrapper">
              <div className="multimedia-video-list-card" onClick={() => handleVideoClick("Mc5g4k_AX8w")}>
                
                <img
                  src="https://img.youtube.com/vi/Mc5g4k_AX8w/mqdefault.jpg"
                  alt=""
                />
                <p>신지민(SHIN JIMIN) 'Sympathy' Official MV</p>
              </div>
              <div className="multimedia-video-list-card" onClick={() => handleVideoClick("n3iOJeeZLcQ")}>
                <img
                  src="https://img.youtube.com/vi/n3iOJeeZLcQ/mqdefault.jpg"
                  alt=""
                />
                <p>
                  [#군조율동조합] 월드스타가 되기 위해 회장님에게 구걸한 ssul.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MultimediaPage;
