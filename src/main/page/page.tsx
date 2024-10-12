import React, { useState, useEffect } from 'react';
import './page.css';
import NonLinearSlider2 from './slider';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

export const TouchCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);


    const carouselItems = [
        { id: 0, content: '페이지 1', page: <NonLinearSlider2 /> },
        { id: 1, content: '페이지 2', page: <NonLinearSlider2 /> },
        { id: 2, content: '페이지 3', page: <NonLinearSlider2 /> },
        { id: 3, content: '페이지 4', page: <NonLinearSlider2 /> },
        { id: 4, content: '페이지 5', page: <NonLinearSlider2 /> },
    ];

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientY);
        console.log('start');
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientY);
        console.log('move');
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 100) {
            // 위로 스와이프
            console.log('up');
            setActiveIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
        }

        if (touchStart - touchEnd < -100) {
            // 아래로 스와이프
            console.log('down');
            setActiveIndex(prev => Math.max(prev - 1, 0));
        }
    };

    return (
        <div className="carousel-container" style={{ border: '1px solid red' }}>
            {carouselItems.map((item, index) => (
                <div
                    style={{ border: '1px solid blue', }}
                    key={item.id}
                    className={`carousel-item ${index === activeIndex
                        ? 'active'
                        : index < activeIndex
                            ? 'prev'
                            : 'next'
                        }`}
                >

                    <div>
                        {item.page}
                    </div>
                </div>
            ))}
            <div
                className="touch-overlay"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            />
        </div>
    );
};

export default TouchCarousel;
//슬라이더와 페이지를 합쳐보면? 지금은 슬라이더가 위에있는데 슬라이더가 아래에 있게 꾸며보자
