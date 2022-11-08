import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">

            <img src={image} alt='' />

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4">
                <h1 className='text-6xl text-white text-bold'>
                    Avi
                    <br />
                    Photography
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/2">
                <p className='text-xl text-white'>Capture your happiness moment.
                    <br />
                    Capture your moment in frame that can memorible in your life.</p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-4">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;