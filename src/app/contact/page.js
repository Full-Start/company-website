"use client";
import React, { useState } from 'react';
import Header from '../../../component/header/Header';
import Footer from '../../../component/footer/Footer';
import './Contact.css';
import { GrMapLocation, GrPhone } from "react-icons/gr";
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import '../../../lib/i18n'

function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !company || !email || !phone || !message) {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Information',
        text: 'Please complete all inputs'
      });
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, company, email, phone, message })
      });

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'We have received your information.'
        }).then(() => {

          router.push("/");
        });
      } else {
        throw new Error("Failed to submit information");
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to submit information. Please try again later.'
      });
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <div className='contact-bg'>
        <div className="contact-text">
          <h1 className="contact-title">{t('Contact Us')}</h1>
          <p className="contact-desc">{t('FULLSTART - Consulting on software development and Solar PV Monitoring')}</p>
        </div>
      </div>
      <div className='contact-us'>{t('Send us a message')}</div>
      <div className='contact-get'>{t('Get In Touch')}</div>

      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='name'>{t('Name *')}</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type='text' id='name' name='name' required placeholder={t('Enter your name')} />
            </div>
            <div className='form-group'>
              <label htmlFor='company'>{t('Company Name *')}</label>
              <input value={company} onChange={(e) => setCompany(e.target.value)} type='text' id='company' name='company' required placeholder={t('Enter your company name')} />
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='email'>{t('Email *')}</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' id='email' name='email' required placeholder='xxxxx@company.com' />
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>{t('Phone *')}</label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} type='tel' id='phone' name='phone' required placeholder='06xxxxxxx' />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='message'>{t('Your Message *')}</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} id='message' name='message' required placeholder={t('Enter your message')}></textarea>
          </div>
          <button type='submit' className='submit-btn'>{t('Submit')}</button>
        </form>
      </div>

      <div className='line-box-contact'>
        <div className='box-contact'>
          <div className='box__desc-contact'>
            <GrMapLocation className='icon-contact' />
            <h1 className='text-location'>{t('Location')}</h1>
            <p className='text-location-desc'>{t('998/20, Moo 10, Nai Khlong Bang Pla Kot Subdistrict,')}
              {t('Phra Samut Chedi District,')}
              {t('Samut Prakan Province 10290, Thailand')}</p>
          </div>
        </div>

        <div className='box-l-contact'>
          <div className='box__desc-l-contact'>
            <GrPhone className='icon-contact' />
            <h1 className='text-inquiries'>{t('Inquiries')}</h1>
            <p className='text-Inquiries-desc'>{t('(+66) 9-5738-2509')}</p>
          </div>
        </div>

        <div className='box-r-contact'>
          <div className='box__desc-r-contact'>
            <GrMapLocation className='icon-contact' />
            <h1 className='text-email'>{t('Email')}</h1>
            <p className='text-email-desc'>{t('info.fullstart@gmail.com')}</p>
          </div>
        </div>
      </div>

      <div className='map-section'>
        <div className='gmap-frame'>
          <iframe className='map' width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=998/20%20%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%8810%20%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5%20%E0%B9%83%E0%B8%99%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%81%E0%B8%94%20%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%20%E0%B8%88.%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%20%2010290+(FulStart%20Co.Ltd,)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
