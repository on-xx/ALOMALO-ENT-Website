
const ImageActorGrid = ({ onSelectArtist }) => {
    const handleImageClick = (artist) => {
        onSelectArtist(artist);
    };

    return (
        <div id="image-grid">
            <div className="image-grid container">
                <div className="image-grid-wrapper">
                    <div className="image-grid-item">
                        <img src="./img/gridimg/kangmingil.jpg" alt="" onClick={() => handleImageClick("kangmingil")} />
                        <div className="image-grid-overlay">
                            <div className="image-grid-overlay-text">강민길</div>
                        </div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/kwakhyunjun.jpg" alt="" onClick={() => handleImageClick("kwakhyunjun")} />
                        <div className="image-grid-overlay">
                            <div className="image-grid-overlay-text">곽현준</div>
                        </div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/kimminki.jpg" alt="" onClick={() => handleImageClick("kimminki")} />
                        <div className="image-grid-overlay">
                            <div className="image-grid-overlay-text">김민기</div>
                        </div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/kimjungmin.jpg" alt=""
                            onClick={() => handleImageClick("kimjungmin")} />
                        <div className="image-grid-overlay">
                            <div className="image-grid-overlay-text">김정민</div>
                        </div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/sunhwaryeong.jpg" alt="" onClick={() => handleImageClick("sunhwaryeong")} />
                        <div className="image-grid-overlay">
                            <div className="image-grid-overlay-text">손화령</div>
                        </div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/shimtaeyoung.jpg" alt="" onClick={() => handleImageClick("shimtaeyoung")} />
                        <div className="image-grid-overlay">
                            <div className="image-grid-overlay-text">심태영</div>
                        </div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/ahnyein.jpg" alt="" onClick={() => handleImageClick("ahnyein")} />
                        <div className="image-grid-overlay">
                            <div className="image-grid-overlay-text">안예인</div>
                        </div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/yoonhaebin.jpg" alt="" onClick={() => handleImageClick("yoonhaebin")} />
                        <div className="image-grid-overlay">
                            <div className="image-grid-overlay-text">윤해빈</div>
                        </div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/leeminwoo.jpg" alt="" onClick={() => handleImageClick("leeminwoo")} />
                        <div className="image-grid-overlay"><div className="image-grid-overlay-text">이민우</div></div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/leesangwoo.jpg" alt=""
                            onClick={() => handleImageClick("leesangwoo")} />
                        <div className="image-grid-overlay">
                            <div className="image-grid-overlay-text">이상우</div>
                        </div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/leehyunkyung.jpg" alt=""
                            onClick={() => handleImageClick("leehyunkyung")} />
                        <div className="image-grid-overlay">
                            <div className="image-grid-overlay-text">이현경</div>
                        </div>
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