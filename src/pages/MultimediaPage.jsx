import Footer from "../components/Footer";
import { useState, useEffect, useRef } from "react";

const MultimediaPage = () => {
  const [selectedVideo, setSelectedVideo] = useState("-FLH3QH5WQg");
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
                onClick={() => handleVideoClick("-FLH3QH5WQg")}
              >
                <img
                  src="https://img.youtube.com/vi/-FLH3QH5WQg/mqdefault.jpg"
                  alt=""
                />
                <p className="multimedia-title">
                  [#신랑수업] (울컥) ＂드디어 여기까지 왔다＂ 사야♥형탁 일본
                  결혼식! 꽃길만 걸으세요 #심형탁 #결혼 | 요즘남자라이프
                  신랑수업 76 회
                </p>
              </div>
              <div
                className="multimedia-video-list-card"
                onClick={() => handleVideoClick("Vz02z5sh0aw")}
              >
                <img
                  src="https://img.youtube.com/vi/Vz02z5sh0aw/mqdefault.jpg"
                  alt=""
                />
                <p className="multimedia-title">
                  [선공개] 달콤한 키스로 영원을 맹세하며 공식적으로 부부가 된
                  형탁♥사야 | 요즘남자라이프 신랑수업 76 회
                </p>
              </div>
              <div
                className="multimedia-video-list-card"
                onClick={() => handleVideoClick("_BhBxbYVQy4")}
              >
                <img
                  src="https://img.youtube.com/vi/_BhBxbYVQy4/mqdefault.jpg"
                  alt=""
                />
                <p className="multimedia-title">
                  [#신랑수업] 장인어른 만나 뚝딱거리는 심형탁! 사야 부모님이
                  말하는 심씨 첫인상은? #아저씨 #심형탁 | 요즘남자라이프
                  신랑수업 75 회
                </p>
              </div>
              <div
                className="multimedia-video-list-card"
                onClick={() => handleVideoClick("fBdNAvbCO5U")}
              >
                <img
                  src="https://img.youtube.com/vi/fBdNAvbCO5U/mqdefault.jpg"
                  alt=""
                />
                <p className="multimedia-title">
                  [선공개] 에몽이의 진심어린 응원에 폭풍 오열한 심형탁╥﹏╥ |
                  요즘남자라이프 신랑수업 74 회
                </p>
              </div>

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
