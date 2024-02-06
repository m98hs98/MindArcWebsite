import React from 'react';
import './Approach.css';
import workplaceImage from '../../pics/workplace.jpg';

const Approach = () => {
  return (
    <div className="Approach">
      <div className="wave-container waveAnimation">
        <div className="wave-containerInner bgTop full-width absolute">
            <div className='wave waveTop'></div>
        </div>
        <div className="wave-containerInner bgMiddle full-width absolute">
            <div className='wave waveMiddle'></div>
        </div>
        <div className="wave-containerInner bgBottom full-width absolute">
            <div className='wave waveBottom'></div>
        </div>
      </div>
      <div className="approach-content">
        <h1 className='approach-heading'>Our <br /> Holistic <br /> Approach</h1>
        <div className='services'>
            <div className="service">
                <h2>MindM Digital</h2>
                <p>Strategy, design, implementation, and ongoing eCommerce website maintenance. We specialise in integrations, custom app development and custom theme development on Shopify Plus. Our experts will help you setup the right infrastructure for growth and global expansion in both the B2C and B2B space.</p>
                <button className="service-button">Explore MindM Digital</button>
            </div>
                <div className="service">
                <h2>MindM Marketing</h2>
                <p>Our team of SEO and content experts are here to help your brand maximise exposure through search and improve site performance reporting and analytics. Meanwhile, our SEM team can help you convert your website traffic into sales or leads through Paid Media.</p>
                <button className="service-button">Explore MindM Marketing</button>
            </div>
            <div className="service">
                <h2>MindM Telecommunications</h2>
                <p>We have been working with leading telecommunications providers for over 10 years to enable your workforce with all the right technology. Our strong partnerships with key Australian and global vendors allow our team to provide the right solutions for your business regardless of location.</p>
                <button className="service-button">Explore MindM Telco</button>
            </div>
        </div>
      </div>
      <img src={workplaceImage} alt='MindM Workplace' className='approach-image' />
    </div>
  );
};

export default Approach;
