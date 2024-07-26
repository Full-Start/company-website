"use client";
import React from "react";
import Header from "../../component/header/Header";
import Content from '../../component/content/Content';
import Footer from '../../component/footer/Footer';
import Link from 'next/link';
import './page.css';
import { useTranslation } from 'react-i18next'; 
import '../../lib/i18n'

function Page() { 
  const { t } = useTranslation(); 

  const handleLinkClick = (path) => {
    router.push(path);
    closeMobileMenu();
  };

  return (
    <>
      <Header />
      <div className="home-bg">
        <div className="container">
          <div className="home-con">
            <div className="home-text">
              <h1 className="title">{t('For the better future')}</h1> 
              <p className="desc1">{t('FullStart Stand for the purpose of')}</p>
              <p className="desc2">{t('making the future of the people grow')}</p>
              <p className="desc3">{t('sustainably.')}</p>
              <Link href="/contact" className="home-btn" onClick={() => handleLinkClick('/contact')}>{t('CONSULT US')}</Link>
            </div>
          </div>
        </div>
      </div>
      <Content />
      <Footer />
    </>
  );
}

export default Page; 
