import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const MainBanner = () => {
    return (
        <div id="main-banner">
            <div className="main-banner container">
                <Swiper
                    className='main-banner-wrapper'
                    modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        Autoplay,
                    ]}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    speed={1200}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                >

                    <SwiperSlide className='main-banner-slide'>
                        <img src="./img/main-banner.jpg" alt="" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default MainBanner