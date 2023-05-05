import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CardSlider = () => {
    return (
        <div id="card-slider">
            <div className="card-slider container">
                <div className="card-slider-title">
                    <h1>Contents</h1>
                </div>
                <Swiper
                    className='card-slider-wrapper'
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={40}
                    slidesPerView={4}
                    speed={1200}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    loop={false}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 0
                        }
                    }}

                >
                    <SwiperSlide className='card-slider-item'>
                        <img src="./img/contentsimg/content-1.jpg" alt="" />
                    </SwiperSlide>

                    <SwiperSlide className='card-slider-item'>
                        <img src="./img/contentsimg/content-2.jpg" alt="" />
                    </SwiperSlide>

                    <SwiperSlide className='card-slider-item'>
                        <img src="./img/contentsimg/content-3.jpg" alt="" />
                    </SwiperSlide>

                    <SwiperSlide className='card-slider-item'>
                        <img src="./img/contentsimg/content-4.jpg" alt="" />
                    </SwiperSlide>

                    <SwiperSlide className='card-slider-item'>
                        <img src="./img/contentsimg/content-5.jpg" alt="" />
                    </SwiperSlide>

                    <SwiperSlide className='card-slider-item'>
                        <img src="./img/contentsimg/content-6.jpg" alt="" />
                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    )
}

export default CardSlider