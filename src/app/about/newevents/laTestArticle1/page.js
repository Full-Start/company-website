'use client';
import React from 'react';
import Header from '../../../../../component/header/Header';
import Footer from '../../../../../component/footer/Footer';
import Image from 'next/image';
import EasyERP from '../../../../../public/EasyERP.jpg';
import './laTestArticle1.css';
import Link from 'next/link';
import facebook from '../../../../../public/facebook.png'
import twitter from '../../../../../public/twitter.png'
import linkedin from '../../../../../public/linkedin.png'
import instagram from '../../../../../public/instagram.png'
import { useTranslation } from 'react-i18next';
import '../../../../../lib/i18n'


function LaTestArticle1() {
  
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className='laTestArticle1-container-wrapper'>
        <div className='laTestArticle1-container'>

          <h3 className='laTestArticle1-postTitle'>
            {t('Develop Application Data Asset to help work with accuracy and transparency in every step.')}
          </h3>
          <span className='laTestArticle1-username'>CEO KIT</span>
          <span className='laTestArticle1-date'>31-07-2024</span>
          <Image src={EasyERP} alt='' className='laTestArticle1-img' />
          <h3 className='laTestArticle1-postSubTitle'>
            {t('Develop Application Data Asset to help work with accuracy and transparency in every step.')}
          </h3>
          <h3 className='laTestArticle1-postDesc'>
            <strong>{t("It's a system")}</strong> {t('that was developed to solve current problems in factories, industries, and including cross-border trading. The company has compiled a list of issues we have encountered with our customers to develop this system.')}
          </h3>

          <h3 className='laTestArticle1-postSubTitle-benefit'>
            {t('Benefits of Using This Application Data Asset')}
          </h3>
          <h3 className='laTestArticle1-postDesc-benefit'>
            <ul>
              <li>{t('Allows the system to meet customer needs, ensuring accurate, precise, and transparent operations at every step.')}</li>
              <li>{t('Features a comprehensive system.')}</li>
              <li>{t('Provides excellent security.')}</li>
              <li>{t("Operates on a reliable cloud system, so customers don't need to worry about maintenance.")}</li>
              <li>{t('Enables customers to create a competitive edge for their business, with enhanced speed.')}</li>
            </ul>
          </h3>

          <div className="laTestArticle1-links">
            <h3>{t('Share')} :</h3>
            <div className="laTestArticle1-socialmedia">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                <Image src={facebook} alt="Share on Facebook" />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Check%20out%20this%20article`} target="_blank" rel="noopener noreferrer">
                <Image src={twitter} alt="Share on Twitter" />
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                <Image src={linkedin} alt="Share on LinkedIn" />
              </a>
              <a href={`https://www.instagram.com`} target="_blank" rel="noopener noreferrer">
                <Image src={instagram} alt="Share on Instagram" />
              </a>
            </div>
          </div>
        </div>

        <div className='container-menu'>
          <h2 className='subtitle-menu'>{t("We would like to present the news")}</h2>
          <h1 className='title-menu'>{t('Latest Articles')}</h1>
          <div className='menu-item'>
            <Link href="/about/newevents/laTestArticle1" className='menu-item'>
              <div className='menu-imgContainer'>
                <Image src={EasyERP} alt="" className='menu-img' />
              </div>
              <div className='menu-textContainer'>
                <h3 className='menu-postTitle'>
                  {t('Develop Application Data Asset to help work with accuracy and transparency in every step.')}
                </h3>
                <div className='menu-detail'>
                  <span className='menu-username'>CEO TANG</span>
                  <span className='menu-date'>10-03-2024</span>
                </div>
              </div>
            </Link>
          </div>

          {/* <div className='menu-item'>
            <Link href="/about/newevents/laTestArticle2" className='menu-item'>
              <div className='menu-imgContainer'>
                <Image src={client} alt="" className='menu-img' />
              </div>
              <div className='menu-textContainer'>
                <h3 className='menu-postTitle'>
                  {t('Develop Application Data Asset to help work with accuracy and transparency in every step.')}
                </h3>
                <div className='menu-detail'>
                  <span className='menu-username'>CEO TANG</span>
                  <span className='menu-date'>10-03-2024</span>
                </div>
              </div>
            </Link>
          </div>

          <div className='menu-item'>
            <Link href="/about/newevents/laTestArticle3" className='menu-item'>
              <div className='menu-imgContainer'>
                <Image src={client} alt="" className='menu-img' />
              </div>
              <div className='menu-textContainer'>
                <h3 className='menu-postTitle'>
                  {t('Develop Application Data Asset to help work with accuracy and transparency in every step.')}
                </h3>
                <div className='menu-detail'>
                  <span className='menu-username'>CEO TANG</span>
                  <span className='menu-date'>10-03-2024</span>
                </div>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LaTestArticle1;
