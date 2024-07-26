import React from "react";
import './Footer.css';
import Image from 'next/image'
import facebook from '../../public/facebook.png'
import twitter from '../../public/twitter.png'
import linkedin from '../../public/linkedin.png'
import instagram from '../../public/instagram.png'
import logo from '../../public/logo.png'
import { FaCaretRight } from "react-icons/fa";
import Link from 'next/link'; 
import { useTranslation } from 'react-i18next'; 
import '../../lib/i18n'


function Footer() {
    
    const { t } = useTranslation(); 

    const handleLinkClick = (path) => {
        router.push(path);
        closeMobileMenu();
    };

    return (
        <div className="footer">
            <div className='logo-png'>
                <Image className="logo-png" src={logo} alt="Logo" />
            </div>
            <div className="sb__footer section__padding">
                <div className="sb__footer">
                    <div className="sb__footer-links_div">
                        <h2>{t("FullStart Company Limited")}</h2>
                        <h4>{t("998/20, Moo 10, Nai Khlong Bang Pla Kot Subdistrict,")}</h4>
                        <h4>{t("Phra Samut Chedi District,")}</h4>
                        <h4>{t("Samut Prakan Province 10290, Thailand")}</h4>
                    </div>

                    <div className="sb__footer-links_div">
                        <h2>{t('Menu')}</h2>
                        <Link href='/' onClick={() => handleLinkClick('/')}><FaCaretRight />{t('HOME')}</Link>
                        <Link href='/about'  onClick={() => handleLinkClick('/about')}><FaCaretRight />{t('ABOUT US')}</Link>
                        <Link href='/reference' onClick={() => handleLinkClick('/reference')}><FaCaretRight />{t('REFERENCE')}</Link>
                        <Link href='/contact'  onClick={() => handleLinkClick('/contact')}><FaCaretRight />{t('CONTACT')}</Link>
                    </div>

                    <div className="sb__footer-links_div">
                        <h2>{t('Our Services')}</h2>
                        <Link href='/ourservices/devsoft' onClick={() => handleLinkClick('/ourservices/devsoft')}><FaCaretRight />{t('Software development services')}</Link>
                        <Link href='/ourservices/solarcell' onClick={() => handleLinkClick('/ourservices/solarcell')}><FaCaretRight />{t('Solar cell installation service')}</Link>
                        <Link href='/ourservices/iotsystem' onClick={() => handleLinkClick('/ourservices/iotsystem')}><FaCaretRight />{t('Internet of Things service service')}</Link>
                        <Link href='/ourservices/networksystem' onClick={() => handleLinkClick('/ourservices/networksystem')}><FaCaretRight />{t('Computer network system services')}</Link>
                    </div>

                    <div className="sb__footer-links_div">
                        <h2>{t('Get In Touch')}</h2>
                        <h4>{t('Follow our channels for other interesting') }</h4>
                        <h4>{t('news and deals from FullStart')}</h4>
                        <div className="socialmedia">
                            <p><Image src={facebook} alt="" /></p>
                            <p><Image src={twitter} alt="" /></p>
                            <p><Image src={linkedin} alt="" /></p>
                            <p><Image src={instagram} alt="" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
