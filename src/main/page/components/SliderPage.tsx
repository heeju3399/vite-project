import React, { useState } from 'react';
import '../page.css';


export const SliderPage = () => {   
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const carouselItems = [
        { id: 0, content: '페이지 1', page: "oksk" },
        { id: 1, content: '페이지 2', page: "oksk" },
        { id: 2, content: '페이지 3', page: "oksk" },
        { id: 3, content: '페이지 4', page: "oksk" },
        { id: 4, content: '페이지 5', page: "oksk" },
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
        <div className="read-carousel-container" style={{ border: '1px solid red' }}>
            {carouselItems.map((item, index) => (
                <div
                    style={{ border: '1px solid blue', }}
                    key={item.id}
                    className={`read-carousel-item ${index === activeIndex
                        ? 'active'
                        : index < activeIndex
                            ? 'prev'
                            : 'next'
                        }`}
                >
<div>{item.content}</div>
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

export default SliderPage;
//슬라이더와 페이지를 합쳐보면? 지금은 슬라이더가 위에있는데 슬라이더가 아래에 있게 꾸며보자

