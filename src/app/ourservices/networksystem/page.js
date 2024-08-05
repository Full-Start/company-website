'use client';
import React from "react";
import Header from "../../../../component/header/Header"
import Footer from '../../../../component/footer/Footer'
import Image from 'next/image'
import exSystem from '../../../../public/exSystem.png'
import exNetwork2 from '../../../../public/exNetwork2.png'
import './networksystem.css'
import Link from 'next/link'
import { GrSystem } from "react-icons/gr";
import { FaWifi } from "react-icons/fa";
import { GiFirewall } from "react-icons/gi";
import { SiEnvoyproxy } from "react-icons/si";
import { LuComputer } from "react-icons/lu";
import { MdOutlineVpnLock } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import '../../../../lib/i18n'


const DevSoft = () => {

    const { t } = useTranslation();

    return (
        <>
            <Header />
            <div className="bg-Network">
                <div className="text-Network">
                    <span className="title">{t('Network Installation')}</span>
                    <br />
                    <span className="title2">{t('and System Design Services')}</span>
                    <br />
                    <br />
                    <span className="description">
                        {t('We provide network installation and system design services tailored to meet your organization’s needs. Our experts are ready to offer close consultation and support to ensure the best network solutions for your business.')}
                    </span>
                </div>
            </div>

            <div className="network-container">
                <div className="network-header">
                    <div className="network-title">{t('Why is Network System Design Important?')}</div>
                    <div className="network-desc">
                        {t('Because the network system is the heart of a business, especially for large organizations, a well-designed network from the start ensures security, facilitates problem-solving, and makes it easier to handle various issues. It also allows for customization and expansion to accommodate new technologies in the future.')}
                    </div>
                </div>
                <div className="network-content">
                    <Image className="network-img" src={exSystem} alt='' />
                    <div className="text-exNetwork">
                        {t('Network design often involves using a network diagram to aid in the design process. This helps visualize the network and presents various details clearly, such as physical connections, the quantity, type, and location of devices and endpoints like IP addresses, security processes, and architecture. Additionally,network design software is used for designing and planning physical connections when creating sites or offices.')}
                    </div>
                </div>
            </div>

            <div className="network-section">
                <div className="text-section">
                    <div className="title-exNetwork2">{t('Network Design')}</div>
                    <div className="text-exNetwork2">
                        {t('Network design begins with gathering a list of assets, endpoints, users, devices, LANs, and other components in the network and organizing them into a network diagram. Next, it is essential to consider the existing network that needs to continue functioning during the deployment of the new network. This requires collaboration between the security team, the product team, and leveraging the expertise of network specialists.')}
                    </div>
                </div>
                <Image className="network-img2" src={exNetwork2} alt='Network Diagram' />
            </div>

            <div className="network-container">
                <div className="network-header">
                    <div className="network-title">{t('Our Service Models')}</div>
                    <div className="network-desc">
                        {t('We offer comprehensive installation services, including equipment procurement, design, installation, maintenance, and advisory services, to ensure that your organization can utilize the network system with maximum efficiency.')}
                    </div>
                </div>
            </div>

            <div className="network-box-container">
                <div className="network-box">
                    <GrSystem className="network-icon" />
                    <div className="text-network-Title">{t('Install a LAN system')}</div>
                </div>
                <div className="network-box">
                    <FaWifi className="network-icon" />
                    <div className="text-network-Title">{t('Install a Wi-Fi system')}</div>
                </div>
                <div className="network-box">
                    <GiFirewall className="network-icon" />
                    <div className="text-network-Title">{t('Install a Firewall')}</div>
                </div>
                <div className="network-box">
                    <SiEnvoyproxy className="network-icon" />
                    <div className="text-network-Title">{t('Install a proxy service')}</div>
                </div>
                <div className="network-box">
                    <LuComputer className="network-icon" />
                    <div className="text-network-Title">{t('Install load balancing , load sharing')}</div>
                </div>
                <div className="network-box">
                    <MdOutlineVpnLock className="network-icon" />
                    <div className="text-network-Title">{t('Install site-to-site VPN , client-to-site VPN')}</div>
                </div>
            </div>

            <Footer />
        </>
    );
};
export default DevSoft;