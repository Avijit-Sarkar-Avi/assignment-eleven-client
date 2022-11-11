import React from 'react';
import image1 from '../../asset/pic6.jpg'
import image2 from '../../asset/pic5.jpg'
import image3 from '../../asset/pic4.jpg'
import image4 from '../../asset/pic3.jpg'

const Section = () => {
    return (
        <div className='md:flex my-20'>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image1} className="max-w-sm rounded-lg shadow-2xl w-48 h-48" alt='' />
                    <img src={image2} className="max-w-sm rounded-lg shadow-2xl w-48 h-48" alt='' />
                    <img src={image3} className="max-w-sm rounded-lg shadow-2xl w-48 h-48" alt='' />
                    <img src={image4} className="max-w-sm rounded-lg shadow-2xl w-48 h-48" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Some Memories Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;