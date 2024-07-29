import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

const Slider = ({slides, sliderSettings}) => (
    <div className="relative">
        <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            effect={sliderSettings.effect || 'slide'}
            spaceBetween={sliderSettings.spaceBetween}
            slidesPerView={sliderSettings.slidesPerView}
            navigation={{ nextEl: `.${sliderSettings.button}-btn-next`, prevEl: `.${sliderSettings.button}-btn-prev` }}
            autoplay={{ delay: sliderSettings.autoplay }}
            className="h-full w-full"
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    {slide.banner ? 
                    <>
                        <img src={slide.img} alt={slide.alt} className="w-full h-auto object-cover" />
                        <p className="slide-decs">
                            {slide.title}
                        </p>
                    </>
                    : null}
                    {slide.client ?
                        <>
                            <div className="flex flex-col card">
                                <div className="card-body">
                                    <div className="card-img">
                                        <div className="logo-wrap flex justify-center items-center">
                                            <img className="logo-img" src={slide.img} alt={slide.name} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    : null}
                </SwiperSlide>
            ))}
        </Swiper>
        <div className={`swiper-button-prev ${sliderSettings.button}-btn-prev`}>
            <span className="custom-button-prev-ic"></span>
        </div>
        <div className={`swiper-button-next ${sliderSettings.button}-btn-next`}>
        <span className="custom-button-next-ic"></span>
        </div>
    </div>
);

export default Slider;
