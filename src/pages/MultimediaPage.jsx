import Footer from "../components/Footer";
import { useState, useEffect, useRef  } from "react";

const MultimediaPage = () => {

  const [selectedVideo, setSelectedVideo] = useState("https://www.youtube.com/embed/a9YNYq8chXc");
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
              src={selectedVideo}
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>

          <div className="multimedia-video-list flex-column">
            <div className="news-card-title-outside">
              <h1>LIST</h1>
            </div>
            <div className="multimedia-video-list-wrapper">

              {/* <div className="multimedia-video-list-card" onClick={() => handleVideoClick("https://tv.naver.com/embed/36959707?autoPlay=true")}>
                <img
                  src="https://phinf.pstatic.net/tvcast/20230614_175/uZay…e7b-b78a-bd2f231dc68b.jpg?type=f172_97_blend_webp"
                  alt=""
                />
                <p>
                  [#군조율동조합] 월드스타가 되기 위해 회장님에게 구걸한 ssul.
                </p>
              </div> */}

              <div className="multimedia-video-list-card" onClick={() => handleVideoClick("https://www.youtube.com/embed/a9YNYq8chXc")}>
                <img
                  src="https://img.youtube.com/vi/a9YNYq8chXc/mqdefault.jpg"
                  alt=""
                />
                <p>우린 그걸 4차원이라 하기로 했어요 모두를 웃겨 놓고 정작 본인만 무표정인 게 ㄹㅇ킬포</p>
              </div>

              <div className="multimedia-video-list-card" onClick={() => handleVideoClick("https://www.youtube.com/embed/Mc5g4k_AX8w")}>                
                <img
                  src="https://img.youtube.com/vi/Mc5g4k_AX8w/mqdefault.jpg"
                  alt=""
                />
                <p>신지민(SHIN JIMIN) 'Sympathy' Official MV</p>
              </div>

              <div className="multimedia-video-list-card" onClick={() => handleVideoClick("https://www.youtube.com/embed/n3iOJeeZLcQ")}>
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

      {/* <iframe src='https://tv.naver.com/embed/36959707?autoPlay=true' frameborder='no' scrolling='no' marginwidth='0' marginheight='0' WIDTH='544' HEIGHT='306' allow='autoplay' allowfullscreen></iframe> */}
      <Footer />
    </>
  );
};



export default MultimediaPage;
