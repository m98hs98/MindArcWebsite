import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

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


    return (
        <header className={scrolled ? 'header scrolled' : 'header'}>
            <div className='headerSection'>
                <div className='header-container d-flex align-items-left justify-content-between px-3'>
                    <div className='header-main'>
                        <div className='nav-dropdown d-lg-block'>
                            <nav aria-label='main'>
                                <ul className='menu d-lg-flex m-4'>
                                    <li className='menu-item dropdown'>
                                        <a className='menu-link' title='services' href='/'>SERVICES</a>
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
                                            <div className='mega-menu-column'>
                                                <h4>PLATFORMS</h4>
                                                <a href='shopify-plus'>SHOPIFY PLUS</a>
                                                <a href='shopify-feature'>SHOPIFY PLUS FEATURES</a>
                                                <a href='adobe-magneto'>ADOBE MAGNETO COMMERCE</a>
                                            </div>
                                            <div className='mega-menu-column'>
                                                <h4>APPS</h4>
                                                <a href='order-manager'>ADVANCED ORDERS MANAGER (SHOPIFY)</a>
                                                <a href='visual-merchandiser'>VISUAL MERCHANDISER (SHOPIFY)</a>
                                                <a href='onion-navigation'>ONION NAVIGATION (SHOPIFY)</a>
                                                <a href='mindarc-middleware'>MINDARC MIDDLEWARE</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='menu-item'>
                                        <a className='menu-link' title='our work' href='/'>OUR WORK</a>
                                    </li>
                                    <li className='menu-item'>
                                        <a className='menu-link' title='about us' href='/'>ABOUT US</a>
                                    </li>
                                    <li className='menu-item'>
                                        <a className='menu-link' title='blog' href='/'>BLOG</a>
                                    </li>
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
                        <div className='contact-us-button'>
                            <a href='/' title='contact us' className='button button-primary'>Contact Us!</a>
                        </div>
                        <div className='phone'>1300 206 827</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;