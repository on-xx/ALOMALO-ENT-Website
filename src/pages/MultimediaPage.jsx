import Footer from "../components/Footer";
import { useState, useEffect, useRef } from "react";

const MultimediaPage = () => {
  const [selectedVideo, setSelectedVideo] = useState("7DHswDsTf98");
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
        <div className="multimediapage container">
          <div className="news-card-title-outside" ref={videoMainRef}>
            <h1>MULTIMEDIA</h1>
          </div>
          <div className="multimedia-video-main">
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
              <div
                className="multimedia-video-list-card"
                onClick={() => handleVideoClick("7DHswDsTf98")}
              >
                <img
                  src="https://img.youtube.com/vi/7DHswDsTf98/mqdefault.jpg"
                  alt=""
                />
                <p className="multimedia-title">
                  프로 출신 파인비치 대표님을 이겨라! 골프 좀 친다는 배우 인맥
                  총동원! 이 섭외가 가능하다고?ㅣ1화
                </p>
              </div>

              <div
                className="multimedia-video-list-card"
                onClick={() => handleVideoClick("5P7rKxNSpxk")}
              >
                <img
                  src="https://img.youtube.com/vi/5P7rKxNSpxk/mqdefault.jpg"
                  alt=""
                />
                <p className="multimedia-title">
                  심형탁, 아내와 결혼을 결심하게 된 계기♥
                </p>
              </div>

              <div
                className="multimedia-video-list-card"
                onClick={() => handleVideoClick("a9YNYq8chXc")}
              >
                <img
                  src="https://img.youtube.com/vi/a9YNYq8chXc/mqdefault.jpg"
                  alt=""
                />
                <p className="multimedia-title">
                  우린 그걸 4차원이라 하기로 했어요 모두를 웃겨 놓고 정작 본인만
                  무표정인 게 ㄹㅇ킬포
                </p>
              </div>

              <div
                className="multimedia-video-list-card"
                onClick={() => handleVideoClick("Mc5g4k_AX8w")}
              >
                <img
                  src="https://img.youtube.com/vi/Mc5g4k_AX8w/mqdefault.jpg"
                  alt=""
                />
                <p className="multimedia-title">
                  신지민(SHIN JIMIN) 'Sympathy' Official MV
                </p>
              </div>

              <div
                className="multimedia-video-list-card"
                onClick={() => handleVideoClick("n3iOJeeZLcQ")}
              >
                <img
                  src="https://img.youtube.com/vi/n3iOJeeZLcQ/mqdefault.jpg"
                  alt=""
                />
                <p className="multimedia-title">
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
