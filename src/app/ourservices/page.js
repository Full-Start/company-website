"use client";
import React from 'react'
import Header from '../../../component/header/Header'
import Footer from '../../../component/footer/Footer'
import './OurServices.css'
import Image from 'next/image'
import Link from 'next/link';
import IoT from '../../../public/IoT.jpg'
import Solar from '../../../public/Solar-Panels.jpg'
import network from '../../../public/networkcom.png'
import software from '../../../public/softwareDev.jpg'
import { useTranslation } from 'react-i18next';
import '../../../lib/i18n'

const OurServices = () => {

  const { t } = useTranslation();


  return (
    <>
      <Header />
      <div className='ourservices-bg'>
        <div className="ourservices-text">
          <h1 className="ourservices-title">{t('Our Services')}</h1>
          <p className="ourservices-desc">{t('FULLSTART - Gathering of experts Information Technology , Network Infrastructure , Software Development.')}</p>
        </div>
      </div>
      <div className='project-line1'>
        <div className='project1'>
          <div className='project-line1-title'>{t('Software development services')}</div>
          <div className='project-line1-img'>
            <Image src={software} alt='' />
          </div>
          <div className='project-line1__desc'>
            <p>{t('Software development services for your innovative ideas')}</p>
          </div>
          <div className='project-line1__btn'>
            <Link href="/ourservices/devsoft" className='project-line1-view'>{t('View More')}</Link>
          </div>
        </div>
        <div className='project2'>
          <div className='project-line2-title'>{t('Solar cell installation service')}</div>
          <div className='project-line2-img'>
            <Image src={Solar} alt='' />
          </div>
          <div className='project-line2__desc'>
            <p>{t('Solar cell Providing complete solar cell services')}</p>
          </div>
          <div className='project-line2__btn'>
            <Link href="/ourservices/solarcell" className='project-line2-view'>{t('View More')}</Link>
          </div>
        </div>
      </div>

      <div className='project-line3'>
        <div className='project3'>
          <div className='project-line3-title'>{t('Internet of Things service')}</div>
          <div className='project-line3-img'>
            <Image src={IoT} alt='' />
          </div>
          <div className='project-line3__desc'>
            <p>{t('Internet of Things Services On a Mission to Build Sustainable Future')}</p>
          </div>
          <div className='project-line3__btn'>
            <Link href='/ourservices/iotsystem' className='project-line4-view'>{t('View More')}</Link>
          </div>
        </div>
        <div className='project4'>
          <div className='project-line4-title'>{t('Computer network system services')}</div>
          <div className='project-line4-img'>
            <Image src={network} alt='' />
          </div>
          <div className='project-line4__desc'>
            <p>{t('Network Installation and System Design Services')}</p>
          </div>
          <div className='project-line4__btn'>
            <Link href='/ourservices/networksystem' className='project-line4-view'>{t('View More')}</Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OurServices;
