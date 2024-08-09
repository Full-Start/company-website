"use client";
import React ,{useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
import service from '../../public/service.jpg'
import customer from '../../public/customer.png'
import fullStart from '../../public/fullstart.png'
import defaultImage from '../../public/default-image.png'
import bgCareer from '../../public/bg-career.png'
import picCareer from '../../public/pic-career.png'
import "./Content.css"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import slide_image_1 from '../../public/img_1.png';
import slide_image_2 from '../../public/img_2.png';
import slide_image_3 from '../../public/img_3.png';
import slide_image_4 from '../../public/img_4.png';
import slide_image_5 from '../../public/img_5.png';
import slide_image_6 from '../../public/img_6.png';
import slide_image_7 from '../../public/img_7.png';
import slide_image_8 from '../../public/img_8.png';
import slide_image_9 from '../../public/img_9.png';
import slide_image_10 from '../../public/img_10.png';
import slide_image_11 from '../../public/img_11.png';
import slide_image_12 from '../../public/img_12.png';
import slide_image_13 from '../../public/img_13.png';
import slide_image_14 from '../../public/img_14.png';
import slide_image_15 from '../../public/img_15.png';
import slide_image_16 from '../../public/img_16.png';
import slide_image_17 from '../../public/img_17.png';
import slide_image_18 from '../../public/img_18.png';
import slide_image_19 from '../../public/img_19.png';
import slide_image_20 from '../../public/img_20.png';
import slide_image_21 from '../../public/img_21.png';
import { useTranslation } from 'react-i18next';
import '../../lib/i18n'


export default function Content() {

    const { t } = useTranslation();

    const handleLinkClick = (path) => {
        router.push(path);
        closeMobileMenu();
    };
    useEffect(() => {
        const careerContainer = document.querySelector('.career-container');

        if (!careerContainer) {
            return;
        }

        const handleScroll = () => {
            const rect = careerContainer.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                careerContainer.classList.add('visible');
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='line-box'>
                <div className='box'>
                    <div className='box-title'>{t('Our Services')}</div>
                    <div className='box-img'>
                        <Image src={service} alt='' />
                    </div>
                    <div className='box__desc'>
                        <p>{t('In the work of the FULLSTART team that is attentive Enthusiastic and ready to serve all the time. Follow up on work that can happen.')}</p>
                    </div>
                    <div className='box__btn'>
                        <Link href='/ourservices' onClick={() => handleLinkClick('/ourservices')} className='box-view'>{t('View More')}</Link>
                    </div>
                </div>
                <div className='box-l'>
                    <div className='box-title-l'>{t('Our Customer')}</div>
                    <div className='box-img-l'>
                        <Image src={customer} alt='' />
                    </div>
                    <div className='box__desc-l'>
                        <p>{t('We have had the opportunity to work with many knowledgeable people. and responds to customers very well')}</p>
                    </div>
                    <div className='box__btn-l'>
                        <Link href='/reference/customers' onClick={() => handleLinkClick('/reference/customers')} className='box-view-l'>{t('View More')}</Link>
                    </div>
                </div>
                <div className='box-r'>
                    <div className='box-title-r'>{t('FullStart')}</div>
                    <div className='box__desc-r'>
                        <p>{t('FULLSTART - We are confident that we can help solve problems in computer technology , IoT , industrial machinery , installation , and maintenance of solar power generation.')}</p>
                    </div>
                    <div className='box-img-r'>
                        <Image src={fullStart} alt='' />
                    </div>
                    <div className='box__btn-r'>
                        <Link href='/about' onClick={() => handleLinkClick('/about')} className='box-view-r'>{t('ABOUT US')}</Link>
                    </div>
                </div>
            </div>
            <div className="horizontal-line-title"></div>
            <div className='text-trust'>{t('BRANDS TRUST US')}</div>
            <div className='text-partner'>{t('Our Clients')}</div>

            <div className="horizontal-line"></div>
            <div className="horizontal-line-l"></div>
            <div className="horizontal-line-r"></div>


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

            <div className='career-container'>
                <Image className='bg-career' src={bgCareer} alt=""></Image>
                <Image className='pic-career' src={picCareer} alt=""></Image>
                <div className='text-career'>
                    <div className='career-title'>#FULLSTARTCAREER</div>
                    <div className='career-subTitle'>{t('Contact Us')}</div>
                    <Link href='/contact' onClick={() => handleLinkClick('/contact')} className='box-view-career'>{t('JOIN US')}</Link>
                </div>
            </div>

            <div className='text-gallery'>{t('FullStart Gallery')}</div>
            <div className="horizontal-line-gallery"></div>
            <div className='gallery-container'>
                <div className='gallery-image'>
                    <Image src={defaultImage} alt=""></Image>
                    <Image src={defaultImage} alt=""></Image>
                    <Image src={defaultImage} alt=""></Image>
                    <Image src={defaultImage} alt=""></Image>
                    <Image src={defaultImage} alt=""></Image>
                    <Image src={defaultImage} alt=""></Image>
                    <Image src={defaultImage} alt=""></Image>
                    <Image src={defaultImage} alt=""></Image>
                    <Image src={defaultImage} alt=""></Image>
                </div>
            </div>
        </div>
    );
}

