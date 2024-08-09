'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './Header.css';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import '../../lib/i18n'
import Image from 'next/image'
import logo from '../../public/logo.png'
import unitedState from '../../public/united-states.png'
import thailand from '../../public/thailand.png'

export default function Header() {

    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [searchTerm, setSearchTerm] = useState('');
    const [foundElement, setFoundElement] = useState(null);
    const [searchError, setSearchError] = useState('');
    const [click, setClick] = useState(false);
    const [aboutUsOpen, setAboutUsOpen] = useState(false);
    const [ourServicesOpen, setOurServicesOpen] = useState(false);
    const [referenceOpen, setReferenceOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setCurrentLanguage(lang);
        localStorage.setItem('language', lang);
        closeMobileMenu();
    };

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => {
        setClick(false);
        setAboutUsOpen(false);
        setOurServicesOpen(false);
        setReferenceOpen(false);
        setLanguageOpen(false);
    };

    const handleLinkClick = (path) => {
        router.push(path);
        closeMobileMenu();
    };

    const handleAboutUsHover = () => {
        if (!click) {
            setAboutUsOpen(true);
        }
    };

    const handleAboutUsLeave = () => {
        if (!click) {
            setAboutUsOpen(false);
        }
    };

    const handleOurServicesHover = () => {
        if (!click) {
            setOurServicesOpen(true);
        }
    };

    const handleOurServicesLeave = () => {
        if (!click) {
            setOurServicesOpen(false);
        }
    };

    const handleReferenceHover = () => {
        if (!click) {
            setReferenceOpen(true);
        }
    };

    const handleReferenceLeave = () => {
        if (!click) {
            setReferenceOpen(false);
        }
    };

    const handleLanguageHover = () => {
        if (!click) {
            setLanguageOpen(true);
        }
    };

    const handleLanguageLeave = () => {
        if (!click) {
            setLanguageOpen(false);
        }
    };

    const handleSearch = () => {
        const elements = document.querySelectorAll('p, div');
        let found = false;

        elements.forEach((element) => {
            const text = element.textContent.toLowerCase();
            if (text.includes(searchTerm.toLowerCase())) {
                element.style.backgroundColor = 'yellow';
                found = true;
            } else {
                element.style.backgroundColor = '';
            }
        });

        if (found) {
            setFoundElement(elements[0]);
            setSearchError('');
        } else {
            setSearchError('');
            Swal.fire({
                icon: 'error',
                title: 'Not Found',
                text: 'ไม่พบคำที่ค้นหา',
                confirmButtonText: 'OK'
            });
        }
    };

    useEffect(() => {
        if (foundElement) {
            foundElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setSearchTerm('');
            setFoundElement(null);
            setSearchError('');
        }
    }, [foundElement]);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
            setCurrentLanguage(savedLanguage);
        }
    }, [i18n]);


    /* ป้องการการกด DROPDOWN MOBILE ที่ผิดปกติ*/
    document.querySelectorAll('.dropdown-container').forEach(function (dropdown) {
        let clickTimeout;

        dropdown.addEventListener('click', function (event) {
            event.preventDefault();

            if (clickTimeout) {
                clearTimeout(clickTimeout);
                clickTimeout = null;

                // นำไปสู่ลิงก์ของ item ที่ถูกกดใน dropdown
                const link = event.target.closest('a');
                if (link) {
                    window.location.href = link.href;
                }
            } else {
                this.classList.toggle('active');

                clickTimeout = setTimeout(() => {
                    clickTimeout = null;
                }, 300);
            }
        });
    });



    return (
        <div className='header'>
            <div className='container'>
                <div className='header-con'>
                    <div className='logo-container'>
                        <Image className="/logo.png" src={logo} alt="Logo" width={300} height={80} />
                    </div>
                    <ul className={click ? "menu active" : "menu"}>
                        <li className='menu-link'>
                            <Link href='/' onClick={() => handleLinkClick('/')}>{t('HOME')}</Link>
                        </li>
                        <li className='menu-link' onMouseEnter={handleAboutUsHover} onMouseLeave={handleAboutUsLeave}>
                            <div className='dropdown-container'>
                                <Link href='/about' className='dropdown-header' onClick={() => handleLinkClick('/about')}>
                                    {t('ABOUT US')} {aboutUsOpen ? <FiChevronUp /> : <FiChevronDown />}
                                </Link>
                                {aboutUsOpen && (
                                    <div className='dropdown-content'>
                                        <ul>
                                            <li>
                                                <Link href='/about/newevents' onClick={() => handleLinkClick('/about/newevents')}>{t('New & Events')}</Link>
                                            </li>
                                            <li>
                                                <Link href='/about/ourteam' onClick={() => handleLinkClick('/about/ourteam')}>{t('Our Team')}</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li className='menu-link' onMouseEnter={handleOurServicesHover} onMouseLeave={handleOurServicesLeave}>
                            <div className='dropdown-container'>
                                <Link href='/ourservices' className='dropdown-header' onClick={() => handleLinkClick('/ourservices')}>
                                    {t('OUR SERVICES')} {ourServicesOpen ? <FiChevronUp /> : <FiChevronDown />}
                                </Link>
                                {ourServicesOpen && (
                                    <div className='dropdown-content'>
                                        <ul>
                                            <li>
                                                <Link href='/ourservices/devsoft' onClick={() => handleLinkClick('/ourservices/devsoft')}>{t('Software development services')}</Link>
                                            </li>
                                            <li>
                                                <Link href='/ourservices/solarcell' onClick={() => handleLinkClick('/ourservices/solarcell')}>{t('Solar cell installation service')}</Link>
                                            </li>
                                            <li>
                                                <Link href='/ourservices/iotsystem' onClick={() => handleLinkClick('/ourservices/iotsystem')}>{t('Internet of Things service')}</Link>
                                            </li>
                                            <li>
                                                <Link href='/ourservices/networksystem' onClick={() => handleLinkClick('/ourservices/networksystem')}>{t('Computer network system services')}</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li className='menu-link' onMouseEnter={handleReferenceHover} onMouseLeave={handleReferenceLeave}>
                            <div className='dropdown-container'>
                                <Link href='/reference' className='dropdown-header' onClick={() => handleLinkClick('/reference')}>
                                    {t('REFERENCE')} {referenceOpen ? <FiChevronUp /> : <FiChevronDown />}
                                </Link>
                                {referenceOpen && (
                                    <div className='dropdown-content'>
                                        <ul>
                                            <li>
                                                <Link href='/reference/customers' onClick={() => handleLinkClick('/reference/customers')}>{t('Customers')}</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li className='menu-link'>
                            <Link href='/contact' onClick={() => handleLinkClick('/contact')}>{t('CONTACT')}</Link>
                        </li>
                        <li className='menu-link' onMouseEnter={handleLanguageHover} onMouseLeave={handleLanguageLeave}>
                            <div className='dropdown-container'>
                                <div className='dropdown-header' onClick={() => setLanguageOpen(!languageOpen)}>
                                    <Image src={currentLanguage === 'en' ? "/united-states.png" : "/thailand.png"} alt={currentLanguage === 'en' ? "English" : "Thai"} className="united-states-icon" width={20} height={20} /> {currentLanguage === 'en' ? "English" : "ภาษาไทย"} {languageOpen ? <FiChevronUp /> : <FiChevronDown />}
                                </div>
                                {languageOpen && (
                                    <div className='dropdown-content'>
                                        <ul>
                                            {currentLanguage === 'en' && (
                                                <li onClick={() => changeLanguage('th')}>
                                                    <Image src={thailand} alt="Thai" className="thailand-icon" width={20} height={20} />ภาษาไทย
                                                </li>
                                            )}
                                            {currentLanguage === 'th' && (
                                                <li onClick={() => changeLanguage('en')}>
                                                    <Image src={unitedState} alt="English" className="united-states-icon" width={20} height={20} />English
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </li>
                    </ul>
                    <div className='search-container'>
                        <input
                            type='text'
                            placeholder={t('Search')}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button onClick={handleSearch}>{t('Search')}</button>
                    </div>
                    <div className='mobile-menu' onClick={handleClick}>
                        {click ? (
                            <FiX className='menu-icon' />
                        ) : (
                            <FiMenu className='menu-icon' />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
