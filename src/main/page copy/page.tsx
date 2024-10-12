import React, { useState, useEffect } from 'react';
import './page.css';

export const TouchCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const carouselItems = [
        { id: 1, content: '페이지 1' },
        { id: 2, content: '페이지 2' },
        { id: 3, content: '페이지 3' },
        { id: 4, content: '페이지 4' },
        { id: 5, content: '페이지 5' },
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
        if (touchStart - touchEnd > 75) {
            // 위로 스와이프
            console.log('up');
            setActiveIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
        }

        if (touchStart - touchEnd < -75) {
            // 아래로 스와이프
            console.log('down');
            setActiveIndex(prev => Math.max(prev - 1, 0));
        }
    };

    return (
        <div className="carousel-container">
            {carouselItems.map((item, index) => (
                <div
                    key={item.id}
                    className={`carousel-item ${index === activeIndex
                        ? 'active'
                        : index < activeIndex
                            ? 'prev'
                            : 'next'
                        }`}
                >
                    <h2>{item.content}</h2>
                    <p>터치 오버레이</p>
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
