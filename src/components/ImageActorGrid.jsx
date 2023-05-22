const ImageActorGrid = ({ onSelectArtist }) => {
  const handleImageClick = (artist) => {
    onSelectArtist(artist);
  };

  return (
    <div id="image-grid">
      <div className="image-grid container">
        <div className="image-grid-wrapper">
          <div className="image-grid-item">
            <img src="./img/gridimg/kangmingil.jpg" alt="" />
            <div
              className="image-grid-overlay"
              onClick={() => handleImageClick("kangmingil")}
            >
              <div className="image-grid-overlay-text">강민길</div>
            </div>
          </div>

          <div className="image-grid-item">
            <img src="./img/gridimg/kwakhyunjun.jpg" alt="" />
            <div
              className="image-grid-overlay"
              onClick={() => handleImageClick("kwakhyunjun")}
            >
              <div className="image-grid-overlay-text">곽현준</div>
            </div>
          </div>

          <div className="image-grid-item">
            <img src="./img/gridimg/kimminki.jpg" alt="" />
            <div
              className="image-grid-overlay"
              onClick={() => handleImageClick("kimminki")}
            >
              <div className="image-grid-overlay-text">김민기</div>
            </div>
          </div>

          <div className="image-grid-item">
            <img src="./img/gridimg/sunhwaryeong.jpg" alt="" />
            <div
              className="image-grid-overlay"
              onClick={() => handleImageClick("sunhwaryeong")}
            >
              <div className="image-grid-overlay-text">손화령</div>
            </div>
          </div>

          <div className="image-grid-item">
            <img src="./img/gridimg/shimtaeyoung.jpg" alt="" />
            <div
              className="image-grid-overlay"
              onClick={() => handleImageClick("shimtaeyoung")}
            >
              <div className="image-grid-overlay-text">심태영</div>
            </div>
          </div>

          <div className="image-grid-item">
            <img src="./img/gridimg/shimhyungtak.jpg" alt="" />
            <div
              className="image-grid-overlay"
              onClick={() => handleImageClick("shimhyungtak")}
            >
              <div className="image-grid-overlay-text">심형탁</div>
            </div>
          </div>

          <div className="image-grid-item">
            <img src="./img/gridimg/ahnyein.jpg" alt="" />
            <div
              className="image-grid-overlay"
              onClick={() => handleImageClick("ahnyein")}
            >
              <div className="image-grid-overlay-text">안예인</div>
            </div>
          </div>

          <div className="image-grid-item">
            <img src="./img/gridimg/yoonhaebin.jpg" alt="" />
            <div
              className="image-grid-overlay"
              onClick={() => handleImageClick("yoonhaebin")}
            >
              <div className="image-grid-overlay-text">윤해빈</div>
            </div>
          </div>

          <div className="image-grid-item">
            <img src="./img/gridimg/leegaryung.jpg" alt="" />
            <div
              className="image-grid-overlay"
              onClick={() => handleImageClick("leegaryung")}
            >
              <div className="image-grid-overlay-text">이가령</div>
            </div>
          </div>

          <div className="image-grid-item">
            <img src="./img/gridimg/leeminwoo.jpg" alt="" />
            <div
              className="image-grid-overlay"
              onClick={() => handleImageClick("leeminwoo")}
            >
              <div className="image-grid-overlay-text">이민우</div>
            </div>
          </div>

          <div className="image-grid-item">
            <img src="./img/gridimg/leesangwoo.jpg" alt="" />
            <div
              className="image-grid-overlay"
              onClick={() => handleImageClick("leesangwoo")}
            >
              <div className="image-grid-overlay-text">이상우</div>
            </div>
          </div>

          <div className="image-grid-item">
            <img src="./img/gridimg/leehyunkyung.jpg" alt="" />
            <div
              className="image-grid-overlay"
              onClick={() => handleImageClick("leehyunkyung")}
            >
              <div className="image-grid-overlay-text">이현경</div>
            </div>
          </div>

          <div className="image-grid-item">
            <img src="./img/gridimg/kimjungmin.jpg" alt="" />
            <div
              className="image-grid-overlay"
              onClick={() => handleImageClick("kimjungmin")}
            >
              <div className="image-grid-overlay-text">한아영</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageActorGrid;
