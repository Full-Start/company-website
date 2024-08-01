"use client";
import React from 'react';
import Header from '../../../component/header/Header';
import Footer from '../../../component/footer/Footer';
import './AboutUs.css'
import Image from 'next/image';
import ImgCoLtd from '../../../public/imgCoLtd.png'
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
            <Image src={ImgCoLtd } alt=''></Image>
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
      <Footer />
    </>
  );
};

