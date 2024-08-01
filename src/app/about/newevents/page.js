'use client';
import React, { useState, useEffect } from 'react';
import Header from '../../../../component/header/Header';
import Footer from '../../../../component/footer/Footer';
import Image from 'next/image';
import EasyERP from '../../../../public/EasyERP.jpg'
import Swal from 'sweetalert2';
import './Newevents.css';
import Link from 'next/link';
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import '../../../../lib/i18n'

function Newevents() {

    const { t } = useTranslation();
    const [newData, setNewData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 4;
    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };
    const getNews = async (page) => {
        try {
            const res = await fetch(`/api/news?page=${page}&limit=${itemsPerPage}`, {
                method: "GET",
                cache: "no-store"
            });
            if (!res.ok) {
                throw new Error("Failed to fetch news");
            }
            const data = await res.json();
            console.log("Fetched data:", data);
            setNewData(data.news);
            setTotalPages(data.totalPages);
            setCurrentPage(data.currentPage);
        } catch (error) {
            console.log("Error loading news", error);
        }
    };

    useEffect(() => {
        getNews(currentPage);
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <>
            <Header />
            <div className='news-bg'>
                <div className='news-text-top'>
                    <h1 className="news-title-top">{t('News & Events')}</h1>
                </div>
            </div>
            <div className='news-top-title'>{t('Recent Posts')}</div>
            <div className='news-container-wrapper'>
                <div className='news-container'>
                    {newData.length > 0 ? (
                        newData.map(val => (
                            <div key={val._id} className='news-key'>
                                <div className='news-imgContainer'>
                                    <Image src={val.img} alt={val.title} width={300} height={200} className='news-img' />
                                </div>
                                <div className='news-textContainer'>
                                    <div className='news-date'>{val.date}</div>
                                    <Link href={`/news/${val._id}`} className='news-title'>
                                        <h1 className='news-title'>{t(val.title)}</h1>
                                    </Link>
                                    <p className='news-desc'>
                                        {t(val.desc)}
                                    </p>
                                    <Link href={`/news/${val._id}`} className='news-btn'>{t('Read More')}</Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-noNews'>{t('No news available')}</p>
                    )}
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
                                    <span className='menu-username'>CEO KIT</span>
                                    <span className='menu-date'>31-07-2024</span>
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
                    </div> */}

                    {/* <div className='menu-item'>
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

            <div className='pagination'>
                <span
                    className={`pagination-link ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => {
                        if (currentPage > 1) {
                            handlePageChange(currentPage - 1);
                        }
                    }}
                >
                    <FaAnglesLeft className='icon-left' /> {t('Previous')}
                </span>
                <span className='pagination-info'>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <span
                            key={index + 1}
                            className={`page-number ${currentPage === index + 1 ? 'current-page' : ''}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </span>
                    ))}
                </span>
                <span
                    className={`pagination-link ${currentPage === totalPages ? 'disabled' : ''}`}
                    onClick={() => {
                        if (currentPage < totalPages) {
                            handlePageChange(currentPage + 1);
                        }
                    }}
                >
                    {t('Next')} <FaAnglesRight className='icon-right' />
                </span>
            </div>
            <Footer />
        </>
    );
}

export default Newevents;
