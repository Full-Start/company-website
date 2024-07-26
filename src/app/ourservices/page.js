"use client";
import React from 'react'
import Header from '../../../component/header/Header'
import Footer from '../../../component/footer/Footer'
import './OurServices.css'
import Image from 'next/image'
import Link from 'next/link';
import client from '../../../public/client.jpg'
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
            <Image src={client} alt='' />
          </div>
          <div className='project-line1__desc'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt</p>
          </div>
          <div className='project-line1__btn'>
            <Link href="/ourservices/devsoft" className='project-line1-view'>View More</Link>
          </div>
        </div>
        <div className='project2'>
          <div className='project-line2-title'>{t('Solar cell installation service')}</div>
          <div className='project-line2-img'>
            <Image src={client} alt='' />
          </div>
          <div className='project-line2__desc'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt</p>
          </div>
          <div className='project-line2__btn'>
            <Link href="/ourservices/solarcell" className='project-line2-view'>View More</Link>
          </div>
        </div>
      </div>

      <div className='project-line3'>
        <div className='project3'>
          <div className='project-line3-title'>{t('Solar cell installation service')}</div>
          <div className='project-line3-img'>
            <Image src={client} alt='' />
          </div>
          <div className='project-line3__desc'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt</p>
          </div>
          <div className='project-line3__btn'>
            <Link href='/ourservices/iotsystem' className='project-line4-view'>View More</Link>
          </div>
        </div>
        <div className='project4'>
          <div className='project-line4-title'>{t('Computer network system services')}</div>
          <div className='project-line4-img'>
            <Image src={client} alt='' />
          </div>
          <div className='project-line4__desc'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt</p>
          </div>
          <div className='project-line4__btn'>
            <Link href='/ourservices/networksystem' className='project-line4-view'>View More</Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OurServices;
