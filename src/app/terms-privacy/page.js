"use client";
import React from 'react';
import Header from '../../../component/header/Header';
import Footer from '../../../component/footer/Footer';
import './terms-privacy.css';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import '../../../lib/i18n';
import Image from 'next/image';
import client from '../../../public/client.jpg';

function TermsPrivacy() {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <div className='TermsPrivacy-container-wrapper'>
                <div className='TermsPrivacy-container'>
                    <h3 className='TermsPrivacy-postTitle'>
                        {t('Privacy Policy')}
                    </h3>
                    <h3 className='TermsPrivacy-postDesc'>
                        {t('The privacy policy allows you to choose your privacy rights when using the website and contacting FullStart Company Limited. We always take care of your data to offer services and products that match your interests better. We protect your personal information to the best of our ability, including giving you control over the use of data on the website and the news you are interested in. Read the personal policy and terms and conditions below.')}
                    </h3>

                    <h3 className='TermsPrivacy-postSubTitle'>
                        {t('The purpose of collecting personal data')}
                    </h3>
                    <h3 className='TermsPrivacy-postDesc'>
                        {t('To give consent to the company to collect, process, or use personal data for the following purposes:')}
                        <ul>
                            <li>{t('To communicate and provide information related to the company is products and services, including presenting projects that customers may be interested in.')}</li>
                            <li>{t('To create marketing plans, analyze, process usage data, and improve and develop the company is products and services.')}</li>
                        </ul>
                    </h3>
                    <h3 className='TermsPrivacy-postSubTitle'>
                        {t('Personal Data Protection Policy')}
                    </h3>
                    <h3 className='TermsPrivacy-postDesc'>
                        {t('This policy applies to the personal data management practices of FullStart Company Limited for the personal data you have provided through the company is online and offline channels. This includes providing you with the information you need, such as product and service details, scheduling product presentations and services, as well as updates and promotions related to products and services')}
                    </h3>
                    <h3 className='TermsPrivacy-postDesc'>
                        {t('Before using this website, please read the terms, conditions, and personal data protection policy carefully. If you do not agree with the terms, conditions, and personal data protection policy, you may stop using the website immediately. If you continue to use the website, it is deemed that you agree to the terms, conditions, and personal data protection policy outlined by the company.')}
                    </h3>
                    <h3 className='TermsPrivacy-postSubTitle'>
                        {t('Contact Us')}
                    </h3>
                    <h3 className='TermsPrivacy-postDesc'>
                        {t('If you need to inquire about the details of collecting, using, and/or disclosing personal data (PDPA), or to exercise your rights under this policy, you can contact the company through the Data Protection Department as follows:')}
                        <a href="mailto:info.fullstart@gmail.com" className='email-link'>
                            info.fullstart@gmail.com
                        </a>
                    </h3>

                </div>

                <div className='container-menu'>
                    <h2 className='subtitle-menu'>{t("We would like to present the news")}</h2>
                    <h1 className='title-menu'>{t('Latest Articles')}</h1>
                    <div className='menu-item'>
                        <Link href="/about/newevents/laTestArticle1" className='menu-item'>
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
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TermsPrivacy;
