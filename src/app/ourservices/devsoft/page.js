'use client';
import React from "react";
import Header from "../../../../component/header/Header"
import Footer from '../../../../component/footer/Footer'
import Image from 'next/image'
import './devsoft.css'
import Link from 'next/link'
import bgSoftware from '../../../../public/bgSoftware.jpg'
import { PiSolarPanelDuotone } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import SDLC from '../../../../public/SDLC.png'
import { FaComputer } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import { LuFileBarChart } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa6";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaConnectdevelop } from "react-icons/fa6";
import { SiAffinitydesigner } from "react-icons/si";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { GrHostMaintenance } from "react-icons/gr";
import { SiTestcafe } from "react-icons/si";
import '../../../../lib/i18n'


const DevSoft = () => {

    const { t } = useTranslation();

    return (
        <>
            <Header />
            <div className="bg-devSoft">
                <div className="title-devSoft">
                    <span>{t('SOFTWARE DEVELOPMENT SERVICES')}</span>
                    <span>{t('FOR YOUR INNOVATIVE IDEAS')}</span>
                    <br />
                    <br />
                    <div>
                        {t('We help our partners accelerate disruption both within their organizations and industries. They strategize new ideas and obtain real business value by getting the most out of our production-ready custom software development services. Talk to our experts today!')}
                    </div>
                    <br />
                    <div><Link href='/contact' onClick={() => handleLinkClick('/contact')} className='btn-getInTouch'>{t('GET IT TOUCH')}</Link></div>
                </div>
            </div>
            <div className="devSoft-container">
                <div className="devSoft-subTitle">
                    {t('OUR CORE CUSTOM SOFTWARE DEVELOPMENT SERVICES')}
                </div>
                <div className="devSoft-desc">
                    {t('From IT strategy consulting and comprehensive technology roadmaps to the end-to-end development of scalable solutions, FullStart delivers a full-cycle software development services that adapt seamlessly to your project requirements and business needs.')}
                </div>
                <div className="grid-container">
                    <div className="grid-item">
                        <div className="icon">
                            <HiOutlineDevicePhoneMobile />
                        </div>
                        <p>{t('MOBILE DEVELOPMENT')}</p>
                        <div className="info">
                            <p>{t('We provide comprehensive design and management services for applications. Our company handles the entire mobile application development process, from concept and ideation to delivery and ongoing support.')}</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="icon">
                            <FaPeopleGroup />
                        </div>
                        <p>{t('DEDICATED DEVELOPMENT TEAMS')}</p>
                        <div className="info">
                            <p>{t('Enhance your delivery capabilities with skilled, dedicated developers. Our clients succeed by leveraging FullStart’s process of creating, inspiring, and managing software development teams.')}</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="icon">
                            <FaComputer />
                        </div>
                        <p>{t('PRODUCT ENGINEERING')}</p>
                        <div className="info">
                            <p>{t('We help large organizations achieve sustainable success by designing new solutions with varying levels of complexity.')}</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="icon">
                            <LuFileBarChart />
                        </div>
                        <p>{t('UX/UI DESIGN')}</p>
                        <div className="info">
                            <p>{t('At FullStart, we provide innovative UI and UX design services, focusing on delivering exceptional ready-to-use products within the right timeframe.')}</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="icon">
                            <FaRegLightbulb />
                        </div>
                        <p>{t('IT CONSULTING')}</p>
                        <div className="info">
                            <p>{t('At FullStart, with a team skilled in advanced technologies, we are not just consultants but your partners in defining IT roadmaps for the future.')}</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="icon">
                            <SiTestcafe />
                        </div>
                        <p>{t('QA & TESTING')}</p>
                        <div className="info">
                            <p>{t('We review every step of the development process and provide you with accurate product quality information, ensuring the timely delivery of robust software.')}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="devSoft-down-container">
                <div className="devSoft-subTitle">
                    {t('CUSTOM SOFTWARE DEVELOPMENT LIFECYCLE')}
                </div>
                <div className="devSoft-desc">
                   {t('We employ best practice processes and development methodologies as a foundation for rapid building of cutting-edge technology solutions in a structured and methodical way.')}
                </div>
                <div className="image-section">
                    <Image className="sdlc-img" src={SDLC} alt='' />
                </div>
            </div>

            <div className='grid-down-container' >
                <div className="grid-down-item">
                    <div className="icon"><RiCalendarScheduleLine /></div>
                    <strong>{t('Planning')}</strong>
                    <p>{t('We collect all the relevant information from the customer to develop custom software development solutions as per their expectation.')}</p>
                </div>
                <div className="grid-down-item">
                    <div className="icon"><SiAffinitydesigner /></div>
                    <strong>{t('Designing')}</strong>
                    <p>{t('The system and documents are prepared as per the requirement specifications. This helps us define overall system architecture and technology stack.')}</p>
                </div>
                <div className="grid-down-item">
                    <div className="icon"><FaConnectdevelop /></div>
                    <strong>{t('Develop')}</strong>
                    <p>{t('The development phase is where coding begins to take place. It is one of the most time-consuming phases in the SDLC. This phase often requires extensive programming skills and knowledge of databases.')}</p>
                </div>
                <div className="grid-down-item">
                    <div className="icon"><SiTestcafe /></div>
                    <strong>{t('Test')}</strong>
                    <p>{t('Evaluating the quality of software with the aim of finding and fixing defects.')}</p>
                </div>
                <div className="grid-down-item">
                    <div className="icon"><AiOutlineDeploymentUnit /></div>
                    <strong>{t('Deploy')}</strong>
                    <p>{t('The final software is released and checked for deployment issues, if any.')}</p>
                </div>
                <div className="grid-down-item">
                    <div className="icon"><GrHostMaintenance /></div>
                    <strong>{t('Maintenance')}</strong>
                    <p>{t('According to the service level agreement, we ensure that needs continue to be met and that the system continues to perform as per the specification mentioned in the first phase.')}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default DevSoft;