'use client';
import React from 'react';
import Header from '../../../component/header/Header';
import Footer from '../../../component/footer/Footer';
import './Reference.css'
import Link from 'next/link';
import { RiCustomerService2Line } from 'react-icons/ri';
import { useTranslation } from 'react-i18next'; 
import '../../../lib/i18n'

const Reference = () => {

  const { t } = useTranslation(); 

  return (
    <>
      <Header />
      <div className='reference-bg'>
        <div className="reference-text">
          <h1 className="reference-title">{t('Reference')}</h1>
          <p className="reference-desc">{t('FULLSTART - References to our experience and performance from past work.')}</p>
        </div>
      </div>
      <div className='line-box-reference'>
        <Link href='/reference/customers' className='reference-box'>
          <RiCustomerService2Line className='icon' />
          <div className='reference-title'>{t('Our Customer')}</div>
        </Link>
      </div>
      <Footer />
    </>
  )
};

export default Reference;
