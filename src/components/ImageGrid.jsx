const ImageGrid = ({ onSelectArtist }) => {

    const handleImageClick = (artist) => {
        onSelectArtist(artist);
    };

    return (
        <div id="image-grid">
            <div className="image-grid container">
                <div className="image-grid-wrapper">
                    <div className="image-grid-item">
                        <img src="./img/gridimg/kangmingil.jpg" alt="" onClick={() => handleImageClick("kangmingil")} />
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/kwakhyunjun.jpg" alt="" onClick={() => handleImageClick("kwakhyunjun")} />
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/goonjo.jpg" alt="" onClick={() => handleImageClick("goonjo")} />
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/kimminki.jpg" alt="" onClick={() => handleImageClick("kimminki")} />
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/kimjungmin.jpg" alt=""
                            onClick={() => handleImageClick("kimjungmin")} />
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/sunhwaryeong.jpg" alt="" onClick={() => handleImageClick("sunhwaryeong")} />
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/shinjimin.jpg" alt="" onClick={() => handleImageClick("shinjimin")} />
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/shimtaeyoung.jpg" alt="" onClick={() => handleImageClick("shimtaeyoung")} />
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/ahnyein.jpg" alt="" onClick={() => handleImageClick("ahnyein")} />
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/yangseungho.jpg" alt="" onClick={() => handleImageClick("yangseungho")} />
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/yoonhaebin.jpg" alt="" onClick={() => handleImageClick("yoonhaebin")} />
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/leeminwoo.jpg" alt="" onClick={() => handleImageClick("leeminwoo")} />
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/gridimg/leesangwoo.jpg" alt=""
                            onClick={() => handleImageClick("leesangwoo")} />
                    </div>

                    <div className="image-grid-item">
                        <img src="./img/logo2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageGrid