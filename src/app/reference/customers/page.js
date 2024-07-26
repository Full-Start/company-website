"use client";
import React from 'react';
import Header from '../../../../component/header/Header';
import Footer from '../../../../component/footer/Footer';
import Image from 'next/image';
import './Customers.css';
import { RiCustomerService2Line } from 'react-icons/ri';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import slide_image_1 from '../../../../public/img_1.png';
import slide_image_2 from '../../../../public/img_2.png';
import slide_image_3 from '../../../../public/img_3.png';
import slide_image_4 from '../../../../public/img_4.png';
import slide_image_5 from '../../../../public/img_5.png';
import slide_image_6 from '../../../../public/img_6.png';
import slide_image_7 from '../../../../public/img_7.png';
import slide_image_8 from '../../../../public/img_8.png';
import slide_image_9 from '../../../../public/img_9.png';
import slide_image_10 from '../../../../public/img_10.png';
import slide_image_11 from '../../../../public/img_11.png';
import slide_image_12 from '../../../../public/img_12.png';
import slide_image_13 from '../../../../public/img_13.png';
import slide_image_14 from '../../../../public/img_14.png';
import slide_image_15 from '../../../../public/img_15.png';
import slide_image_16 from '../../../../public/img_16.png';
import slide_image_17 from '../../../../public/img_17.png';
import slide_image_18 from '../../../../public/img_18.png';
import slide_image_19 from '../../../../public/img_19.png';
import slide_image_20 from '../../../../public/img_20.png';
import slide_image_21 from '../../../../public/img_21.png';
import { useTranslation } from 'react-i18next'; 
import '../../../../lib/i18n'

const Customers = () => {

    const { t } = useTranslation(); 
    
    return (
      <>
        <Header />
        <div className='customers-bg'>
          <RiCustomerService2Line className='icon-ri' />
          <div className='customers-text'>{t('CUSTOMERS')}</div>
        </div>
  
  
              <div className='text-el'>{t('Electricity generation monitoring system and electricity bill calculation')}</div>
              <div className="horizontal-box"></div>
              <div className="container-slide">
                  <Swiper
                      effect={'coverflow'}
                      grabCursor={true}
                      centeredSlides={true}
                      loop={true}
                      slidesPerView={'3'}
                      coverflowEffect={{
                          rotate: 0,
                          stretch: 0,
                          depth: 100,
                          modifier: 2.5,
                      }}
                      pagination={{ el: '.swiper-pagination', clickable: true }}
                      navigation={{
                          nextEl: '.swiper-button-next',
                          prevEl: '.swiper-button-prev',
                          clickable: true,
                      }}
                      modules={[EffectCoverflow, Pagination, Navigation]}
                      className="swiper_container"
                  >
                      <SwiperSlide>
                          <Image src={slide_image_1} alt="slide_image" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image src={slide_image_2} alt="slide_image" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image src={slide_image_3} alt="slide_image" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image src={slide_image_4} alt="slide_image" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image src={slide_image_5} alt="slide_image" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image src={slide_image_6} alt="slide_image" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image src={slide_image_7} alt="slide_image" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image src={slide_image_8} alt="slide_image" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image src={slide_image_9} alt="slide_image" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image src={slide_image_10} alt="slide_image" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image src={slide_image_11} alt="slide_image" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image src={slide_image_12} alt="slide_image" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image src={slide_image_13} alt="slide_image" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image src={slide_image_14} alt="slide_image" />
                      </SwiperSlide>
  
  
                      <div className="slider-controler">
                          <div className="swiper-button-prev slider-arrow">
                              <ion-icon name="arrow-back-outline"></ion-icon>
                          </div>
                          <div className="swiper-button-next slider-arrow">
                              <ion-icon name="arrow-forward-outline"></ion-icon>
                          </div>
                          <div className="swiper-pagination"></div>
                      </div>
                  </Swiper>
              </div>
  
  
              <div className='text-so'>{t('Software  development design')}</div>
              <div className="horizontal-box-so"></div>
              <div className="container-slide">
                  <Swiper
                      effect={'coverflow'}
                      grabCursor={true}
                      centeredSlides={true}
                      loop={true}
                      slidesPerView={'3'}
                      coverflowEffect={{
                          rotate: 0,
                          stretch: 0,
                          depth: 100,
                          modifier: 2.5,
                      }}
                      pagination={{ el: '.swiper-pagination', clickable: true }}
                      navigation={{
                          nextEl: '.swiper-button-next',
                          prevEl: '.swiper-button-prev',
                          clickable: true,
                      }}
                      modules={[EffectCoverflow, Pagination, Navigation]}
                      className="swiper_container"
                  >
                      <SwiperSlide>
                          <Image src={slide_image_15} alt="slide_image" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image src={slide_image_16} alt="slide_image" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image src={slide_image_17} alt="slide_image" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image src={slide_image_18} alt="slide_image" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image src={slide_image_19} alt="slide_image" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image src={slide_image_20} alt="slide_image" />
                      </SwiperSlide>
                      <SwiperSlide>
                          <Image src={slide_image_21} alt="slide_image" />
                      </SwiperSlide>
  
  
                      <div className="slider-controler">
                          <div className="swiper-button-prev slider-arrow">
                              <ion-icon name="arrow-back-outline"></ion-icon>
                          </div>
                          <div className="swiper-button-next slider-arrow">
                              <ion-icon name="arrow-forward-outline"></ion-icon>
                          </div>
                          <div className="swiper-pagination"></div>
                      </div>
                  </Swiper>
              </div>
        <Footer />
      </>
    )
  };
  
  export default Customers;