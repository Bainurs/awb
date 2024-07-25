import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Autoplay } from 'swiper/modules';

const Slider = ({slides, sliderSettings}) => (
    <div className="relative">
        <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={sliderSettings.slidesPerView}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            autoplay={{ delay: sliderSettings.autoplay }}
            className="h-full w-full"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    {slide.title ? 
                    <>
                        <img src={slide.img} alt={slide.alt} className="w-full h-auto object-cover" />
                        <p className="slide-decs">
                            {slide.title}
                        </p>
                    </>
                    :
                    <></>}
                    {slide.client ?
                        <>
                            <div className="flex flex-col card">
                                <div className="card-body">
                                    <div className="card-img">
                                        <div className="logo-wrap flex justify-center items-center">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    :
                        <>
                            
                        </>
                    }
                </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-button-prev custom-button-prev">
            <span className="custom-button-prev-ic"></span>
        </div>
        <div className="swiper-button-next custom-button-next">
        <span className="custom-button-next-ic"></span>
        </div>
    </div>
);

export default Slider;
