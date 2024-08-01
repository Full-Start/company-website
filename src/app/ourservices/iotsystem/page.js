'use client';
import React from "react";
import Header from "../../../../component/header/Header"
import Footer from '../../../../component/footer/Footer'
import Image from 'next/image'
import './iotsystem.css'
import Link from 'next/link'
import { GrVmMaintenance } from "react-icons/gr";
import { VscServerProcess } from "react-icons/vsc";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { TbAlertSquare } from "react-icons/tb";
import { MdManageHistory } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { SiArkecosystem } from "react-icons/si";
import { SiManageiq } from "react-icons/si";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { SlEnergy } from "react-icons/sl";
import { RiRemoteControlLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next';
import '../../../../lib/i18n'


const DevSoft = () => {

    const { t } = useTranslation();

    return (
        <>
            <Header />
            <div className="bg-IoT">
                <div className="title-IoT">
                    <span className="largest">{t('Internet of Things (IoT) Services')}</span>
                    <br /><br />
                    <span className="medium">{t('On a Mission to Build Sustainable Future')}</span>
                    <br /><br /><br />
                    <span className="smallest">{t('At FullStart, we drive value-centered IoT solutions and build multi-level data pipelines for that: from edge computing to cloud data processing and data science.')}</span>
                </div>
            </div>
            <div className="subTitle-IoT">
                <div className="heading-large">{t('Driving IoT Innovation across Industries')}</div>
                <div className="heading-medium">{t('Internet of Things (IoT) services help elaborate your idea of IoT adoption and set up secure technology infrastructure for advanced data tasks.')}</div>
                <div className="text-normal">{t('Seeing a great and wide-ranging value of IoT, we apply the technology for a number of key purposes.')}</div>
            </div>
            <div className="IoT-container">
                <div className="IoT-box">
                    <GrVmMaintenance className="IoT-icon" />
                    <div className="text-IoT-Title">{t('Preventive equipment maintenance')}</div>
                    <br />
                    <br />
                    <div className="text-IoT-desc">{t('Remote monitoring of equipment performance metrics and early detection of potential malfunctioning. Prevents equipment breakage and production interruptions.')}</div>
                </div>
                <div className="IoT-box">
                    <RiRemoteControlLine className="IoT-icon" />
                    <div className="text-IoT-Title">{t('Remote operation of machinery / appliances')}</div>
                    <br />
                    <br />
                    <div className="text-IoT-desc">{t('Automating manual actions based on commands sent from control apps to actuators. Applicable to simple actions like switching on/off, opening/closing, and complicated industrial processes, like robotic order picking.')}</div>
                </div>
                <div className="IoT-box">
                    <MdOutlineScreenshotMonitor className="IoT-icon" />
                    <div className="text-IoT-Title">{t('Environmental monitoring')}</div>
                    <br />
                    <br />
                    <div className="text-IoT-desc">{t('Measuring the required environmental metrics (temperature, humidity, pollution, CO2 level, etc.). Helps check the compliance of asset storage and transportation, monitor operation conditions for industrial equipment and at human workplaces, understand the environmental impact of processes.')}</div>
                </div>
                <div className="IoT-box">
                    <SlEnergy className="IoT-icon" />
                    <div className="text-IoT-Title">{t('Optimization of energy consumption')}</div>
                    <br />
                    <br />
                    <div className="text-IoT-desc">{t('Automated control over the intensity of energy utilization depending on the outside conditions. Applicable to personal (home lights) and public (street lights) surroundings.')}</div>
                </div>
                <div className="IoT-box">
                    <MdManageHistory className="IoT-icon" />
                    <div className="text-IoT-Title">{t('Hands-off inventory management')}</div>
                    <br />
                    <br />
                    <div className="text-IoT-desc">{t('Remote tracking of assets’ geoposition and movements. Instant indication of low stock.')}</div>
                </div>
                <div className="IoT-box">
                    <MdHealthAndSafety className="IoT-icon" />
                    <div className="text-IoT-Title">{t('Remote health monitoring')}</div>
                    <br />
                    <br />
                    <div className="text-IoT-desc">{t('Analyzing vital signs measured by wearable devices and informing a supervising doctor on deviations from normal levels. An advanced level of telehealth.')}</div>
                </div>
                <div className="IoT-box">
                    <TbAlertSquare className="IoT-icon" />
                    <div className="text-IoT-Title">{t('Video surveillance and real-time alerts')}</div>
                    <br />
                    <br />
                    <div className="text-IoT-desc">{t('Instant detection of abnormal behavior within the area under surveillance. Used for crime prevention, early fire detection, traffic incident alerts.')}</div>
                </div>
                <div className="IoT-box">
                    <VscServerProcess className="IoT-icon" />
                    <div className="text-IoT-Title">{t('Product quality management')}</div>
                    <br />
                    <br />
                    <div className="text-IoT-desc">{t('Monitoring product parameters and process compliance during manufacturing.')}</div>
                </div>
                <div className="IoT-box">
                    <MdOutlineEmojiTransportation className="IoT-icon" />
                    <div className="text-IoT-Title">{t('Connected transport')}</div>
                    <br />
                    <br />
                    <div className="text-IoT-desc">{t('Real-time monitoring of cargo in transit to verify its quality and validate the compliance with transportation requirements.')}</div>
                </div>
                <div className="IoT-box">
                    <MdOutlinePriceChange className="IoT-icon" />
                    <div className="text-IoT-Title">{t('Usage-based service pricing')}</div>
                    <br />
                    <br />
                    <div className="text-IoT-desc">{t('Monitoring the asset utilization behavior and asset conditions to quickly identify risky situations and dynamically adjust the service price')}</div>
                </div>
            </div>


            <div className="IoT-lastTitle">{t('From Planning to Launch - We Hand You a Turnkey IoT Solution')}</div>
            <div className="IoT-lastBox">
                <div className="lastBox">
                    <SiAmazonsimpleemailservice className="lastBox-icon" />
                    <div className="lastBox-title">{t('Consulting for the best value from IoT adoption')}
                        <div className="lastBox-desc">
                            <li>{t('Investigating your business context and tasks/problems you want to address with IoT implementation.')}</li>
                            <li>{t('Defining what data must be collected to meet project goals.')}</li>
                            <li>{t('Hardware consulting.')}</li>
                            <li>{t('Planning a data center with proper data processing and mining capabilities.')}</li>
                            <li>{t('Setting up a data pipeline.')}</li>
                            <li>{t('Functionally scoping each solution component: smart things, data warehousing and analytics solutions, control and user-facing apps.')}</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="IoT-lastBox">
                <div className="lastBox">
                    <SiArkecosystem className="lastBox-icon" />
                    <div className="lastBox-title">{t('IoT ecosystem setup: data collection, analysis and presentation')}
                        <div className="lastBox-desc">
                            <li>{t('Data generation layer: configuring IoT devices and connecting them to the network.')}</li>
                            <li>{t('Edge computing: building a decentralized network to keep data processing close to where it originates, which allows for fast local decisions.')}</li>
                            <li>{t('Data center setup: modelling a data processing environment for heterogeneous IoT data, applying machine learning and data science algorithms to identify patterns and trends needed for the solution of required problems.')}</li>
                            <li>{t('End-user app development: creating different types of apps (web, mobile, VR/AR, smart screens, voice assistants) to serve visualized data insights.')}</li>
                            <li>{t('Development of control apps: creating web and mobile apps enabling remote control of IoT devices.')}</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="IoT-lastBox">
                <div className="lastBox">
                    <SiManageiq className="lastBox-icon" />
                    <div className="lastBox-title">{t('IoT application management for sustainable operation')}
                        <div className="lastBox-desc">
                            <li>{t('Technical support and troubleshooting: quick identification of data quality, application availability and usage issues.')}</li>
                            <li>{t('Cloud management: monitoring and optimization of cloud resources consumption.')}</li>
                            <li>{t('Security management and regulatory compliance: network, server, database, and application vulnerability assessment; infrastructure compliance review; DDoS and APT prevention.')}</li>
                            <li>{t('IoT solution evolution: application updates and expansions to support your changing business needs.')}</li>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default DevSoft;