import React, { useEffect, useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import './Header.css';

const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        console.log("Hi, I'm here!");
    };

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const updateDimensions = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const showHamburgerMenu = windowWidth <= 990 || !scrolled;



const servicesDropdownContent = (
    <div className='mega-menu'>
                                            
        <div className='mega-menu-column'>
            <h4>ECOMMERCE</h4>
            <a href='web-development'>WEB DEVELOPMENT</a>
            <a href='ui/ux-web-design'>UI/UX WEB DESIGN</a>
            <a href='shoppify-support'>SHOPIFY PLUS SUPPORT</a>
            <a href='web-automation'>WEBSITE AUTOMATION/SHOPIFY FLOW</a>
            <a href='app-development'>CUSTOM APP DEVELOPMENT</a>
            <a href='system-integration'>SYSTEM INTEGRATION</a>                        
        </div>
        <div className='mega-menu-column'>
            <h4>DIGITAL MARKETING</h4>
            <a href='seo'>SEO</a>
            <a href='sem'>SEM</a>
            <a href='cro'>CRO</a>
            <a href='content-strategy'>CONTENT STRATEGY</a>
            <a href='social-media'>SOCIAL MEDIA</a>
            <a href='ch-paid-media'>CHINESE PAID MEDIA</a>
            <a href='google-analytics'>GOOGLE ANALYTICS & GTM</a>
            <a href='local-seo'>LOCAL SEO</a>
            <a href='seo-web-migration'>SEO FOR WEBSITE MIGRATIONS</a>
            <a href='seo-audit'>SEO AUDIT</a>
        </div>
        <div className='mega-menu-column'>
            <h4>TELECOMMUNICATION</h4>
            <a href='undifined-communications'>UNDIFINED COMMUNICATIONS</a>
            <a href='speed-net'>HIGH SPEED INTERNET</a>
            <a href='soft-networks'>SOFTEARE DEFINED NETWORKS</a>
            <a href='omni-ch-center'>OMNI-CHANNEL CONTACT CENTER</a>
            <a href='cloud-services'>CLOUD SERVICES</a>
        </div>
                                            
        <div className='mega-menu-group'>
            <div className='mega-menu-column bg-blue'>
                <h4>PLATFORMS</h4>
                <a href='shopify-plus'>SHOPIFY PLUS</a>
                <a href='shopify-feature'>SHOPIFY PLUS FEATURES</a>
                <a href='adobe-magneto'>ADOBE MAGNETO COMMERCE</a>
            </div>
            <div className='mega-menu-column bg-blue'>
                <h4>APPS</h4>
                <a href='order-manager'>ADVANCED ORDERS MANAGER (SHOPIFY)</a>
                <a href='visual-merchandiser'>VISUAL MERCHANDISER (SHOPIFY)</a>
                <a href='onion-navigation'>ONION NAVIGATION (SHOPIFY)</a>
                <a href='mindarc-middleware'>MINDARC MIDDLEWARE</a>
            </div>
        </div>
    </div>
);

const menuItems = [
    {
        title: 'SERVICES',
        content: servicesDropdownContent,
    },
    {
        title: 'OUR WORK',
        href: '/our-work'
    },
    {
        title: 'About US',
        href: '/about-us'
    },
    {
        title: 'Blog',
        href: '/blog'
    },
];



    return (
        <header className={scrolled ? 'header scrolled' : 'header'}>

            {showHamburgerMenu && (
                <div className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
            )}
            
            {isMobileMenuOpen && (
                <div className='mobile-menu'>
                    <button className='close-button' onClick={toggleMobileMenu}>X</button>
                    <ul>
                        <li><a href='/services' className='menu-item-services'>SERVICES</a></li>
                        <li><a href='/our-work'>OUR WORK</a></li>
                        <li><a href='/about-us'>ABOUT US</a></li>
                        <li><a href='/blog'>BLOG</a></li>
                        <li><a href='/contact-us'>CONTACT US</a></li>
                    </ul>
                </div>
            )}


            <div className='headerSection'>
                <div className='header-container d-flex align-items-left justify-content-between px-3'>
                    <div className='header-main'>
                        <div className='nav-dropdown d-lg-block'>
                            <nav aria-label='main'>
                                <ul className='menu d-lg-flex m-4'>
                                    {menuItems.map((item,index) => (
                                    <li key={index} className={`menu-item dropdown ${activeIndex === index ? 'active' : ''}`} onClick={() => item.content && toggleAccordion(index)}>
                                        <a className='menu-link' title={item.title} href={item.href || '#'}>{item.title}</a>
                                        {item.content && activeIndex === index && (
                                            <div className='mega-menu'>{item.content}</div>
                                        )}
                                    </li>
                                    
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className='logo-wrapper'>
                        <a className='logo-image' href='/'>
                            <img src="//www.mindarc.com.au/cdn/shop/t/5/assets/mindarc-logo-blk.png?v=152472296200138488861589258936" alt='MindArc'/>
                        </a>
                    </div>
                    <div className='header-contact d-flex'>
                        {windowWidth <= 990 ? (
                            <a href='tel:1300206827' className='phone-icon'>
                                <FaPhone />
                            </a>
                        ) : (
                            <>
                                <div className='contact-us-button'>
                                    <a href='/' title='contact us' className='button button-primary'>Contact Us!</a>
                                </div>
                                <div className='phone'>1300 206 827</div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;