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
    const [value, setValue] = React.useState<number>(0);

    const handleChange = (event: Event, newValue: number | number[]) => {
        console.log('oksk', newValue);
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };

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
        <div className="carousel-container" >
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

                    <Box sx={{ width: 250, m: 2, height: 500 }}>
                        <Typography id="non-linear-slider" gutterBottom >
                            앞에서! : {valueLabelFormat(value)}
                        </Typography>
                        <Slider
                            sx={{ color: 'blue' }}
                            value={value}
                            min={0}
                            step={1}
                            max={100}
                            // scale={calculateValue}
                            //getAriaValueText={valueLabelFormat}
                            //valueLabelFormat={valueLabelFormat}
                            marks={marks}

                            onChange={handleChange}
                            valueLabelDisplay="off"
                            aria-labelledby="non-linear-slider"
                        />
                    </Box>



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

function valueLabelFormat(value: number) {
    // // 앞에서 나옴!!!!
    let result = '';
    let data2 = `가나다라마바사아자차카타파하`;

    let vv = data2.length / 100;
    let rr = vv * value;

    const data99 = data2;
    result = data99.substring(0, rr).toString(); // 시작과 끝을 지정해서 보여주기
    return result;
}


const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 20,
        label: '2',
    },
    {
        value: 40,
        label: '4',
    },
    {
        value: 60,
        label: '6',
    },
    {
        value: 80,
        label: '8',
    },
    {
        value: 100,
        label: '10',
    },
];