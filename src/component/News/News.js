import React from "react";
import './News.css';
import NewsArticle from './NewsArticle';


const News = () => {

    return (
        <div className="news">
            <h1 className="news-header">News and Mentions</h1>
            <div className="news-container">
                <NewsArticle 
                    title="Click and Collect – how social restrictions are accelerating changes to shopping habits."
                    content="A report from AusPost projected that percentage of online retail sales will increase to 15% by the end of 2020, compared with the 2019 figure of 10%. As part of this increased demand, retailers are responding by providing convenient fulfilment options like click-and-collect..."
                    image="amazonLocker"
                    readMoreLink="#"
                />
                <NewsArticle 
                    title="Youtube SEO: How to increase views in 2021"
                    content="Want to know how to get popular on YouTube without breaking the bank? Read about a few of our favourite Youtube SEO techniques that could help your video rank higher and get more views. Get the most out of your video production efforts and always remember... Content is King!"
                    image="youtube"
                    readMoreLink="#"
                />
                <NewsArticle 
                    title="What is 5G? 5G's Impact on Business"
                    content="5G’s ultra-low latency enables users to have a consistent experience while using mission-critical communication applications such as RingCentral, dial-pad, Go To Connect, or Zoom. 5G has helped facilitate efficient remote workforces by allowing they to stay connected and maintain business level speeds of internet access..."
                    image="fiveg"
                    readMoreLink="#"
                />
            </div>
        </div>
    );
};


export default News;