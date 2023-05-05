
const ImageActorGrid = ({onSelectArtist}) => {
    const handleImageClick = (artist) => {
        onSelectArtist(artist);
    };

  return (
    <div id="image-grid">
            <div className="image-grid container">
                <div className="image-grid-wrapper">
                    <div className="image-grid-item">
                        <img src="./img/gridimg/kangmingil.jpg" alt="" onClick={() => handleImageClick("kangmingil")} />
                        <div className="image-grid-overlay">Kang Mingil</div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/kwakhyunjun.jpg" alt="" onClick={() => handleImageClick("kwakhyunjun")} />
                        <div className="image-grid-overlay">Kwak Hyunjun</div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/kimminki.jpg" alt="" onClick={() => handleImageClick("kimminki")} />
                        <div className="image-grid-overlay">Kim Minki</div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/kimjungmin.jpg" alt=""
                            onClick={() => handleImageClick("kimjungmin")} />
                            <div className="image-grid-overlay">Kim Jungmin</div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/sunhwaryeong.jpg" alt="" onClick={() => handleImageClick("sunhwaryeong")} />
                        <div className="image-grid-overlay">Son Hwaryeong</div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/shimtaeyoung.jpg" alt="" onClick={() => handleImageClick("shimtaeyoung")} />
                        <div className="image-grid-overlay">Shim Taeyoung</div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/ahnyein.jpg" alt="" onClick={() => handleImageClick("ahnyein")} />
                        <div className="image-grid-overlay">Ahn Yein</div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/yoonhaebin.jpg" alt="" onClick={() => handleImageClick("yoonhaebin")} />
                        <div className="image-grid-overlay">Yoon Haebin</div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/leeminwoo.jpg" alt="" onClick={() => handleImageClick("leeminwoo")} />
                        <div className="image-grid-overlay">Lee Minwoo</div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/leesangwoo.jpg" alt=""
                            onClick={() => handleImageClick("leesangwoo")} />
                            <div className="image-grid-overlay">Lee Sangwoo</div>
                    </div>

                    <div className="image-grid-item image-grid-actor-logo">
                        <img src="./img/logo2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ImageActorGrid