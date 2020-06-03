import React from 'react';
import './FrontpageArticle.css';


const FrontpageArticle = () => {

    return (
        <div className="article-container">
            <div className="article__main">
                <h1 className="article__title">Welcome</h1>
                <p className="article__content">I'm going to try to make this as short and sweet as possible. I've created this website for the breaking community to be able check out events and news that is happening within the scene we all love.</p>
                <p className="article__author">-Flowers</p>
            </div>
        </div>
    );
}

export default FrontpageArticle;