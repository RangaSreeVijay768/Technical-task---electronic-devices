import {Link, useParams} from "react-router-dom";
import React from "react";

const MyOtherProjects = () => {
    const handleUrlClick = (url) => {
        window.open(url, '_blank');
    };
    return (
        <div className="device-list">
            <Link to={'/'}>
                <button className='device-button position-fixed-left-0'>Home</button>
            </Link>

            <button className='device-button' onClick={() => handleUrlClick('https://ranga-ecommerce.vercel.app/')}>
                Ecommerce App using MERN
            </button>
            <button className='device-button' onClick={() => handleUrlClick('https://rangasreevijay768.github.io/Car-Game/')}>
                Car Racing Game
            </button>
            <button className='device-button' onClick={() => handleUrlClick('https://rangasreevijay768.github.io/songs_website/')}>
                Songs Website
            </button>
            <button className='device-button' onClick={() => handleUrlClick('https://rangasreevijay768.github.io/60sec-timer/')}>
                60sec timer with circular progress bar
            </button>

        </div>
    );
};

export default MyOtherProjects
