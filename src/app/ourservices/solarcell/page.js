'use client';
import React from "react";
import Header from "../../../../component/header/Header"
import Footer from '../../../../component/footer/Footer'
import Image from 'next/image'
import './solarcell.css'
import Link from 'next/link'
import bgSmartLogger from '../../../../public/bgSmartLogger.jpg'
import exModel from '../../../../public/exModel.png'
import picModel from '../../../../public/picModel.png'
import bgwork from '../../../../public/bgwork.jpg'
import EasyERP from '../../../../public/EasyERP.jpg'
import ExSolarCell from '../../../../public/exsolarcell.png'
import PvSolar1 from '../../../../public/pvsolar1.png'
import PvSolar2 from '../../../../public/pvsolar2.png'
import ERPSystem from '../../../../public/erpSystem.png'
import { PiSolarPanelDuotone } from "react-icons/pi";
import { BsClipboardPulse } from "react-icons/bs";
import { PiCopySimple } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import '../../../../lib/i18n'


const DevSoft = () => {

    const { t } = useTranslation();

    return (
        <>
            <Header />
            <div className="devSoft-bg">
                <div className='devSoft-box'>
                    <div className='devSoft-box-t'>
                        <div className='devSoft-box-title'>{t('Solar cell')}</div>
                        <div className='devSoft-box-subTitle'>{t('Providing complete solar')}<br />{t('cell services')} <PiSolarPanelDuotone className="devSoft-icon-solar" /></div>
                        <div className='devSoft-box-desc'>
                            <p>{t('PV Solar monitoring system is software that the company developed in order to control solar energy production to be as efficient as possible.')}</p>
                        </div>
                    </div>

                    <div className='devSoft-box-wrapper'>
                        <div className='devSoft-box-l'>
                            <div className='devSoft-box-text'>
                                <BsClipboardPulse className="devSoft-icon-pulse" />
                                <div className='devSoft-box-title-l'>{t('Smart Logger')}</div>
                                <div className='devSoft-box-desc-l'>
                                    <p>{t('It is a device that helps strengthen')} <br />
                                        {t('the functioning of the solar energy')}<br />
                                        {t('production system.It will collect')} <br />
                                        {t('various information and use it to')} <br />
                                        {t('analyze and find problems. Helps ')}<br />
                                        {t('make work more convenient and')}<br />
                                        {t('faster.')}</p>
                                </div>
                            </div>
                        </div>

                        <div className='devSoft-box-r'>
                            <div className='devSoft-box-text'>
                                <PiCopySimple className="devSoft-icon-copy" />
                                <div className='devSoft-box-title-r'>{t("ERP System")}</div>
                                <div className='devSoft-box-desc-r'>
                                    <p>{t('It is a system that was developed')} <br />
                                        {t('from problems in industrial ')} <br />
                                        {t('factories to cross-border trading.')} < br />
                                        {t('Make this system responsive to ')} < br />
                                        {t('the work of customers. To work')} < br />
                                        {t('correctly and transparently in')} < br />
                                        {t('every step')} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="devSoft-content">
                <Image className="devSoft-img" src={bgwork} alt='Client Image' />
                <div className="devSoft-text">
                    <div className="devSoft-text-content">{t('Why Should You Choose FullStart?')}</div>
                    <div className="devSoft-text-desc">
                        {t('Because we were founded by a team of experts and professionals')}<br />
                        {t('with over 25 years of experience in managing and installing')}<br />
                        {t('solar cell systems, both domestically and internationally.')}<br />
                        {t('We also possess expertise in industrial technology, particularly')}<br />
                        {t('in import-export, enabling us to')}
                        {t('consolidate ideas from all aspects comprehensively.')}
                    </div>
                </div>
            </div>



            <div className="product1-container">
                <div className="product1-item-wrapper">
                    <div className="product1-item" >
                        <span className="product1-item-number">1</span>
                    </div>
                    <div className="product1-description-bg" >
                        <span className="product1-description">{t('Integrated solar cell installation')}</span>
                    </div>
                </div>
            </div>


            <Image className="exsolarcell-img" src={ExSolarCell} alt='' ></Image>
            <div className="setup-system">
                <div className="setup-system-item">
                    <span className="setup-system-item-number">{t('1')}</span>
                    <div className="setup-system-item-title">{t('Solar panels')}</div>
                    <div className="setup-system-item-desc">{t('Receive energy from the sun and produce it as electricity.')}</div>
                </div>
                <div className="setup-system-item">
                    <span className="setup-system-item-number">{t('2')}</span>
                    <div className="setup-system-item-title">{t('FullStart Logger')}</div>
                    <div className="setup-system-item-desc">{t('Collect, analyze and display performance data.')}</div>
                </div>
                <div className="setup-system-item">
                    <span className="setup-system-item-number">{t('3')}</span>
                    <div className="setup-system-item-title">{t('Electricity meter')}</div>
                    <div className="setup-system-item-desc">{t('Used to measure electrical energy')}</div>
                </div>
                <div className="setup-system-item">
                    <span className="setup-system-item-number">{t('4')}</span>
                    <div className="setup-system-item-title">{t('Inverter')}</div>
                    <div className="setup-system-item-desc">{t('Power converter from direct current (DC) to alternating current (AC)')}</div>
                </div>
                <div className="setup-system-item">
                    <span className="setup-system-item-number">{t('5')}</span>
                    <div className="setup-system-item-title">{t('Electrical control cabinet')}</div>
                    <div className="setup-system-item-desc">{t('Control and distribute power to various parts')}</div>
                </div>
                <div className="setup-system-item">
                    <span className="setup-system-item-number">{t('6')}</span>
                    <div className="setup-system-item-title">{t('Electrical appliance')}</div>
                    <div className="setup-system-item-desc">{t('It is a device that converts electrical energy into other forms of energy, such as light energy, sound energy, etc.')}</div>
                </div>
            </div>

            <div className="product2-container">
                <div className="product2-item-wrapper">
                    <div className="product2-item" >
                        <span className="product2-item-number">{t('2')}</span>
                    </div>
                    <div className="product2-description-bg" >
                        <span className="product2-description">{t('PV Solar monitoring system')}</span>
                    </div>
                </div>
            </div>

            <div className="product2-subTitle">
                <em>
                    {t('This software, developed by our company, is designed to meet the needs of customers who seek to efficiently manage and control the production of solar power.')}</em>
                {t('It enables users to promptly identify and resolve issues through a rapid and accurate alert system. Additionally, the software supports a wide variety of devices from different brands,')}
                {t(' offering flexibility in equipment selection without limiting users to a specific brand.')}
            </div>
            <Image className="pvSolar1-img" src={PvSolar2} alt='' ></Image>
            <Image className="pvSolar2-img" src={PvSolar1} alt='' ></Image>


            <div className="product3-container">
                <div className="product3-item-wrapper">
                    <div className="product3-item">
                        <span className="product2-item-number">{t('3')}</span>
                    </div>
                    <div className="product3-description-bg">
                        <span className="product3-description">{t('FullStart Smart Logger')}</span>
                    </div>
                </div>
                <Image className="product3-img" src={bgSmartLogger} alt=''></Image>
                <div className="text-smartLogger">
                    <span>FullStart</span>
                    <span className="smartLogger">Smart Logger</span>
                </div>
                <div className="product3-content">
                    <div className="product3-subTitle">
                        <div className="bold-text">{t('It is a device that helps promote the operation of the solar power generation system')}</div>
                        <br />
                        {t('from various devices to be used in analyzing problems during each working period. It also has a screen to')}
                        <br />
                        {t('display the working results at that time, allowing the staff to easily look at the overall production value')}
                        <br />
                        {t('without having to go through each device. It helps to work more conveniently and quickly, and can also add')}
                        <br />
                        {t('more controls than other smart lockers.')}
                    </div>
                    <Image className="picModel" src={picModel} alt=''></Image>
                </div>
                <div className="text-side">
                    <div className="front">{t('FRONT')}</div>
                    <div className="behide">{t('BEHIDE')}</div>
                    <div className="side">{t('SIDE')}</div>
                    <div className="top">{t('TOP')}</div>
                </div>
                <Image className="exModel" src={exModel} alt='' ></Image>
            </div>

            <div className="product4-container">
                <div className="horizontal-line-title-product"></div>
                <div className="product4-item-wrapper">
                    <div className="product4-item" >
                        <span className="product2-item-number">{t('4')}</span>
                    </div>
                    <div className="product4-description-bg" >
                        <span className="product4-description">{t('Application Data Asset')}</span>
                    </div>
                </div>
                <Image className="easyErp" src={EasyERP} alt=''></Image>
            </div>
            <div className="product4-subTitle">
                {t('Application Data Asset This system has been developed to address current operational issues in industrial plants and the buying and selling of products.')}
                {t('The company has gathered problems encountered from our customers to develop this system,')}<em>{t('enabling it to meet customer needs effectively. This system ensures that operations are accurate, precise, and transparent at every step.')}</em>
                {t('Additionally, it features excellent security measures and operates on a reliable Cloud platform, relieving customers of concerns about maintenance or data storage.')}
                {t('Furthermore, with its advanced technology, the system enables customers to compete more effectively and swiftly in the business arena.')}
            </div>



            <div className="product5-container">
                <div className="horizontal-line-title-product"></div>
                <div className="product5-item-wrapper">
                    <div className="product5-item" >
                        <span className="product5-item-number">{t('5')}</span>
                    </div>
                    <div className="product5-description-bg" >
                        <span className="product5-description">{t('ERP System')}</span>
                    </div>
                </div>
                <Image className="erpSystem-img" src={ERPSystem} alt='' ></Image>
            </div>
            <div className="product5-subTitle">
                <em>{t('This software system helps manage organizational resources more efficiently')}</em> {t('by connecting various departments within the organization,')}
                {t('such as human resources, accounting, production, sales, and others. It enables effective management of these resources, saving time and reducing complex processes.')}
                {t('The system features organized data storage, allows for shared data usage across the organization, and ensures high security.')}
            </div>







            <Footer />
        </>
    );
};
export default DevSoft;