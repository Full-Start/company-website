"use client";
import React from 'react';
import Header from '../../../component/header/Header';
import Footer from '../../../component/footer/Footer';
import './AboutUs.css'
import Image from 'next/image';
import ImgCoLtd from '../../../public/imgCoLtd.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import slide_image_1 from '../../../public/img_1.png';
import slide_image_2 from '../../../public/img_2.png';
import slide_image_3 from '../../../public/img_3.png';
import slide_image_4 from '../../../public/img_4.png';
import slide_image_5 from '../../../public/img_5.png';
import slide_image_6 from '../../../public/img_6.png';
import slide_image_7 from '../../../public/img_7.png';
import slide_image_8 from '../../../public/img_8.png';
import slide_image_9 from '../../../public/img_9.png';
import slide_image_10 from '../../../public/img_10.png';
import slide_image_11 from '../../../public/img_11.png';
import slide_image_12 from '../../../public/img_12.png';
import slide_image_13 from '../../../public/img_13.png';
import slide_image_14 from '../../../public/img_14.png';
import slide_image_15 from '../../../public/img_15.png';
import slide_image_16 from '../../../public/img_16.png';
import slide_image_17 from '../../../public/img_17.png';
import slide_image_18 from '../../../public/img_18.png';
import slide_image_19 from '../../../public/img_19.png';
import slide_image_20 from '../../../public/img_20.png';
import slide_image_21 from '../../../public/img_21.png';
import { useTranslation } from 'react-i18next';
import '../../../lib/i18n'

export default function AboutUs() {

  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className='about-bg'>
        <div className="about-text">
          <h1 className="about-title">{t('About Us')}</h1>
          <p className="about-desc">{t('FULLSTART-Consulting and trusting experienced people like us.')}</p>
        </div>
      </div>
      <div className='text-about-title'>{t('FULLSTART Company Limited')}</div>
      <div className='text-full'>{t('FULLSTART Company Limited once again, 14 March 2022')}</div>
      <div className='text-it'>{t('It arises from an audience that is savvy in information technology. network infrastructure Possible software development')}</div>
      <div className='text-more'>{t('More than 20 years in the story 2012, and the reasons for this will be seen. Solar energy will become more likely,so we began')}</div>
      <div className='text-to'>{t('to study this technology And in 2015, a software called Solar PV was developed. Monitoring became the first in Thailand that')}</div>
      <div className='text-can'>{t('can collect data from production Electricity from solar energy From various devices such as Inverter, Power Meter, Revenue Meter,')}</div>
      <div className='text-pyra'>{t('Pyranometer and other equipment sold in the market Many more, which have worked both domestically and abroad.')}</div>

      <div className='container-about'>
        <div className='content-about'>
          <div className='content-about-l'>
            <Image src={ImgCoLtd} alt=''></Image>
          </div>
          <div className='content-about-r'>
            <h2 className='title-com'>{t('Company Information')}</h2>
            <div className="label">{t('Name')}</div> <div className="value">{t('FULLSTART Company Limited')}</div>
            <div className="label">{t('Registered capital')}</div> <div className="value">{t('Registered capital 2,100,000 baht')}</div>
            <div className="label">{t('Founding day')}</div> <div className="value">{t('14 March 2022')}</div>
            <div className="label">{t('Registration number')}</div> <div className="value">{t('0 1155 65008 11 4')}</div>
            <div className="label">{t('Company location')}</div> <div className="value">{t('998/20 Village No. 10, Nai Khlong Bang Pla Kot Subdistrict Phra Samut Chedi District Samut Prakan Province 10290')}</div>
            <div className="label">{t('Phone number')}</div> <div className="value">{t('095-738-2509')}</div>
          </div>
        </div>
      </div>
      

      <div className='text-trust'>{t('BRANDS TRUST US')}</div>
      <div className='text-partner'>{t('Our Clients')}</div>
      <div className="horizontal-line"></div>
      <div className='text-ourClients'>{t('We serve clients better with partnership.')}</div>
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
  );
};

