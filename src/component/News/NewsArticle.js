import React from "react";
import amazonLockerImage from '../../pics/amazonLocker.jpg';
import youtubeImage from '../../pics/youtube.jpg';
import fivegImage from '../../pics/fiveg.jpg';


const imageMap = {
    amazonLocker: amazonLockerImage,
    youtube: youtubeImage,
    fiveg: fivegImage,
};


const NewsArticle = ({ title, content, image, readMoreLink }) => {

    const imageUrl = imageMap[image];

    return (
        <div className="shg-box-vertical-align-wrapper">
            <div className="shg-box-content">
                <div className="shg-image-container" style={{ backgroundImage: `url(${imageUrl})` }}>
                </div>
                <div className="shg-rich-text shg-theme-text-content">
                    <h3>{title}</h3>
                    <p>{content}</p>
                    <a className="button" href={readMoreLink}>Read More</a>
                </div>
            </div>
        </div>
    );
};

export default NewsArticle;