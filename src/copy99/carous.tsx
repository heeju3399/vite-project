import React, { useState } from 'react';
import './Test5.css';

const CarouselView = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const carouselItems = [
        { id: 1, title: '페이지 1' },
        { id: 2, title: '페이지 2' },
        { id: 3, title: '페이지 3' },
        { id: 4, title: '페이지 4' },
        { id: 5, title: '페이지 5' },
        { id: 6, title: '페이지 6' },
        { id: 7, title: '페이지 7' },
        { id: 8, title: '페이지 8' },
        { id: 9, title: '페이지 9' },
        { id: 10, title: '페이지 10' },
    ];

    const handleTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        const startY = touch.clientY;

        const handleTouchMove = (e: React.TouchEvent) => {
            const touch = e.touches[0];
            const currentY = touch.clientY;
            const diff = startY - currentY;

            if (Math.abs(diff) > 50) {
                if (diff > 0 && activeIndex < carouselItems.length - 1) {
                    setActiveIndex(activeIndex + 1);
                } else if (diff < 0 && activeIndex > 0) {
                    setActiveIndex(activeIndex - 1);
                }
                document.removeEventListener('touchmove', handleTouchMove as any);
            }
        };

        document.addEventListener('touchmove', handleTouchMove as any);
        document.addEventListener('touchend', () => {
            document.removeEventListener('touchmove', handleTouchMove as any);
        }, { once: true });
    };

    return (
        <div>
            <div onTouchStart={handleTouchStart}>
                {carouselItems.map((item, index) => (
                    // <Slide key={item.id} active={index === activeIndex}>
                    //     <h2>{item.title}</h2>
                    // </Slide>
                    <Slider key={item.id} active={index === activeIndex} item={item} />
                ))}
            </div>
        </div>
    );
};

function Slider({ active, item }: { active: boolean, item: { id: number, title: string } }) {
    return (
        <div key={item.id} className={'oksk'} style={{ opacity: active ? 1 : 0 }}>
            <div style={{ fontSize: '30px', fontWeight: 'bold' }}>{item.title}</div>
        </div>
    );
}


export default CarouselView;



// css
// .oksk {
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #f0f0f0;
//     position: absolute;
//     top: 0;
//     left: 0;
//     transition: opacity 0.3s ease;
// }