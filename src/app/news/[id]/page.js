"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../../../../component/header/Header';
import Footer from '../../../../component/footer/Footer';
import Image from 'next/image';
import EasyERP from '../../../../public/EasyERP.jpg';
import facebook from '../../../../public/facebook.png';
import twitter from '../../../../public/twitter.png';
import linkedin from '../../../../public/linkedin.png';
import instagram from '../../../../public/instagram.png';
import './[id].css';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import '../../../../lib/i18n';

function NewDetail({ params }) {
  const { t } = useTranslation();
  const { id } = params;
  const [newData, setNewData] = useState({});
  const [layoutStyle, setLayoutStyle] = useState('id1-layout');
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState('');

  const getPostById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/news/${id}`, {
        method: 'GET',
        cache: 'no-store',
      });
      if (!res.ok) {
        throw new Error('Failed to fetch a post');
      }
      const data = await res.json();
      setNewData(data.newItem);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostById(id);

    if (id === '669ac6f98233f8e4eb3f2903') {
      setLayoutStyle('id2-layout');
    } else if (id === '669ac6fc8233f8e4eb3f2904') {
      setLayoutStyle('id3-layout');
    } else if (id === '669ac6fe8233f8e4eb3f2905') {
      setLayoutStyle('id4-layout');
    } else if (id === '669ac7008233f8e4eb3f2906') {
      setLayoutStyle('id5-layout');
    } else {
      setLayoutStyle('id1-layout');
    }

    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, [id]);

  return (
    <>
      <Header />
      <div className={`id1-container-wrapper ${layoutStyle}`}>
        <div className='id1-container'>
          <h3 className='id1-postTitle'>{t(newData.title) || 'Default Title'}</h3>
          <span className='id1-date'>{newData.date || 'Default Date'}</span>
          <Image 
            src={newData.img || '/default-image.png'} 
            alt={newData.title || 'Default Alt Text'} 
            width={300} 
            height={200} 
            className='id1-img' 
          />
          <h3 className='id1-postSubTitle'>{t('Subtitle')}</h3>
          <h3 className='id1-postDesc'>{t(newData.desc) || 'Default Description'}</h3>

          {currentUrl && (
            <div className='id1-links'>
              <h3>{t('Share :')}</h3>
              <div className='id1-socialmedia'>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image src={facebook} alt='Share on Facebook' width={32} height={32} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Check%20out%20this%20article`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image src={twitter} alt='Share on Twitter' width={32} height={32} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image src={linkedin} alt='Share on LinkedIn' width={32} height={32} />
                </a>
                <a
                  href={`https://www.instagram.com`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image src={instagram} alt='Share on Instagram' width={32} height={32} />
                </a>
              </div>
            </div>
          )}
        </div>

        <div className='container-menu'>
          <h2 className='subtitle-menu'>{t('We would like to present the news')}</h2>
          <h1 className='title-menu'>{t('Latest Articles')}</h1>
          <div className='menu-item'>
            <Link href='/about/newevents/laTestArticle1' className='menu-item'>
              <div className='menu-imgContainer'>
                <Image src={EasyERP} alt='EasyERP Overview' className='menu-img' width={200} height={150} />
              </div>
              <div className='menu-textContainer'>
                <h3 className='menu-postTitle'>
                  {t('Develop Application Data Asset to help work with accuracy and transparency in every step.')}
                </h3>
                <div className='menu-detail'>
                  <span className='menu-username'>CEO KIT</span>
                  <span className='menu-date'>31-07-2024</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default NewDetail;
