import React, { useState } from 'react';
import './Test5.css';

const CarouselView = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTouching, setIsTouching] = useState(false);

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
        console.log('start');
        setIsTouching(true);

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
            <div >
                {carouselItems.map((item, index) => (
                    <div onTouchStart={handleTouchStart} key={item.id} className={'oksk'} style={{ opacity: index === activeIndex ? 1 : 0 }}>
                        <div style={{ fontSize: '30px', fontWeight: 'bold' }}>{item.title}</div><br />
                        <div>isTouching: {isTouching.toString()}</div>
                        <div>그냥 터치하면 숨긴게 보이는거?</div>
                        <div>위로 쓸면 다음으로 ? </div>

                    </div>
                ))}
            </div>
        </div>
    );
};



export default CarouselView;
