import React, { useState } from 'react';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'src/assets/img/revimages/homepage05-slide1.jpg',
        'src/assets/img/revimages/homepage05-slide2.jpg',
        'src/assets/img/revimages/homepage05-slide3.jpg',
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider-container" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <div className="slider" style={{ display: 'flex', transition: 'transform 0.5s', transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} style={{ width: '100%', flex: '0 0 100%', boxSizing: 'border-box' }}>
                        <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', zIndex: '1' }}>
                Prev
            </button>
            <button onClick={nextSlide} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', zIndex: '1' }}>
                Next
            </button>
        </div>
    );
};

export default Slider;
