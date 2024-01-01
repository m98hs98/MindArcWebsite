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
                                    <li className='menu-item'>
                                        <a className='menu-link' title='services' href='/'>SERVICES</a>
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