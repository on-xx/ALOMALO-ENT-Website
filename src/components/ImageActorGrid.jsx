
const ImageActorGrid = ({ onSelectArtist }) => {
    const handleImageClick = (artist) => {
        onSelectArtist(artist);
    };

    return (
        <div id="image-grid">
            <div className="image-grid container">
                <div className="image-grid-wrapper">
                    <div className="image-grid-item">
                        <img src="./img/gridimg/kangmingil.jpg" alt=""  />
                        <div className="image-grid-overlay" onClick={() => handleImageClick("kangmingil")}>
                            <div className="image-grid-overlay-text">KANG MINGIL</div>
                        </div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/kwakhyunjun.jpg" alt=""  />
                        <div className="image-grid-overlay" onClick={() => handleImageClick("kwakhyunjun")}>
                            <div className="image-grid-overlay-text">KWAK HYUNJUN</div>
                        </div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/kimminki.jpg" alt=""  />
                        <div className="image-grid-overlay" onClick={() => handleImageClick("kimminki")}>
                            <div className="image-grid-overlay-text">KIM MINGIL</div>
                        </div>
                    </div>

                    

                    <div className="image-grid-item">
                        <img src="./img/gridimg/sunhwaryeong.jpg" alt="" />
                        <div className="image-grid-overlay" onClick={() => handleImageClick("sunhwaryeong")}>
                            <div className="image-grid-overlay-text">SON HWARYEONG</div>
                        </div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/shimtaeyoung.jpg" alt=""  />
                        <div className="image-grid-overlay" onClick={() => handleImageClick("shimtaeyoung")}>
                            <div className="image-grid-overlay-text">SHIM TAEYOUNG</div>
                        </div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/shimhyungtak.jpg" alt=""  />
                        <div className="image-grid-overlay" onClick={() => handleImageClick("shimhyungtak")}>
                            <div className="image-grid-overlay-text">SHIM HYUNGTAK</div>
                        </div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/ahnyein.jpg" alt="" />
                        <div className="image-grid-overlay" onClick={() => handleImageClick("ahnyein")}>
                            <div className="image-grid-overlay-text">AHN YEIN</div>
                        </div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/yoonhaebin.jpg" alt=""  />
                        <div className="image-grid-overlay" onClick={() => handleImageClick("yoonhaebin")}>
                            <div className="image-grid-overlay-text">YOON HAEBIN</div>
                        </div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/leegaryung.jpg" alt=""
                             />
                        <div className="image-grid-overlay" onClick={() => handleImageClick("leegaryung")}>
                            <div className="image-grid-overlay-text">LEE GARYUNG</div>
                        </div>
                    </div>


                    <div className="image-grid-item">
                        <img src="./img/gridimg/leeminwoo.jpg" alt=""
                           />
                        <div className="image-grid-overlay" onClick={() => handleImageClick("leeminwoo")}>
                            <div className="image-grid-overlay-text">LEE MINWOO</div>
                        </div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/leesangwoo.jpg" alt=""
                            />
                        <div className="image-grid-overlay" onClick={() => handleImageClick("leesangwoo")}>
                            <div className="image-grid-overlay-text">LEE SANGWOO</div>
                        </div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/leehyunkyung.jpg" alt=""
                             />
                        <div className="image-grid-overlay" onClick={() => handleImageClick("leehyunkyung")}>
                            <div className="image-grid-overlay-text">LEE HYUNKYUNG</div>
                        </div>
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/kimjungmin.jpg" alt=""
                             />
                        <div className="image-grid-overlay" onClick={() => handleImageClick("kimjungmin")}>
                            <div className="image-grid-overlay-text">HAN AHYOUNG</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageActorGrid