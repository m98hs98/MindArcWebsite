import React, { useEffect, useState } from 'react';
import './Intro.css';



const sentences = [
    "Shopify Integration Specialists.",
    "Digital Enthusiasts.",
    "Shopify Plus Partners.",
    "SEO, SEM, CRO, Social & content Specialists.",
    "Telecommunications Experts."
];


const Intro = () => {
    const [index, setIndex] = useState(0);
    const [exit, setExit] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setExit(true);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
                setExit(false);
            }, 500);
            
        }, 3000);

        return () => clearInterval(timer);
    }, []);



  return (
    <div className="intro">
        <h1>MindArc</h1>
        <h2>Who is MindArc? <span className={`intro-highlight ${exit ? 'exit' : ''}`}>{sentences[index]}</span></h2>
        <p>Since 2010, our passionate team of technology experts have followed a path of relentless learning and experimentation in all things digital, retail, and everything in-between. Our vision is to apply our collective experience and help enable and transform commerce through smart technology...</p>
        <div className="intro-logos">
            <img 
                src="https://i.shgcdn.com/3a5d0a12-4f60-4682-bf3a-9ed09559e50c/-/format/auto/-/preview/3000x3000/-/quality/lighter/" 
                alt="Shopify Plus" 
                className='intro-logos-shopify'
            />
            <img 
                src="https://i.shgcdn.com/64042a73-7455-4742-a50d-8562999f8e4c/-/format/auto/-/preview/3000x3000/-/quality/lighter/" 
                alt="AWS" 
                className='intro-logos-aws'
            />
            <img 
                src="https://i.shgcdn.com/c7e364cc-7a34-4376-87b0-cc7b5195087d/-/format/auto/-/preview/3000x3000/-/quality/lighter/" 
                alt="Google" 
                className='intro-logos-google'
            />
            <img 
                src="https://i.shgcdn.com/0e232a46-1fff-4527-8596-5f5daaf03a24/-/format/auto/-/preview/3000x3000/-/quality/lighter/" 
                alt="Adwords" 
                className='intro-logos-adwords'
            />
            <img 
                src="https://i.shgcdn.com/421b5d8b-474a-414c-bf10-e852466fd61e/-/format/auto/-/preview/3000x3000/-/quality/lighter/" 
                alt="Ring Central" 
                className='intro-logos-ringcentral'
            />
            <img 
                src="https://i.shgcdn.com/6ac31e3e-fefb-42a3-bf74-6dc599a68840/-/format/auto/-/preview/3000x3000/-/quality/lighter/" 
                alt="zoom" 
                className='intro-logos-zoom'
            />
        </div>
    </div>
  );
};

export default Intro;
