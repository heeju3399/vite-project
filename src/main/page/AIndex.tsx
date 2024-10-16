import React, { useState, useEffect } from 'react';
import './page.css';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import ReadMain from './read_mode/ReadMain';
import {bible_revelations} from '../data/bible_revelations.json';

interface typeRevelation {
    chapter: number;
    verses: {
        verse: number;
        text: string;
        }[];
}[];

export function AIndex () {

       bible_revelations.map((v:typeRevelation)=>{
        console.log("map", v.chapter)
        console.log("map", v.verses)
        v.verses.map((vv)=>{
            console.log("ttttt", vv.text)
        })
    });
    
    
  
    return(<>
   <Box>
   <ReadMain></ReadMain>
   </Box>
    

    

    
    </>);
}

// export function AIndex () {
//     const [value, setValue] = React.useState<number>(0);

//     const handleChange = (event: Event, newValue: number | number[]) => {
//         console.log('oksk', newValue);
//         if (typeof newValue === 'number') {
//             setValue(newValue);
//         }
//     };
//     return(<>
//     <Box>
//     <TouchCarousel></TouchCarousel>
    
//     <NonLinearSlider2 />
//     </Box>
//     </>);
// }

function NonLinearSlider2() {
    const [value, setValue] = React.useState<number>(0);

    const handleChange = (event: Event, newValue: number | number[]) => {
        console.log('oksk', newValue);
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };

    return (
        <Box sx={{ p: 2,  border: '1px solid green' }}>
      
            <Slider
                sx={{ color: 'blue', border: '1px solid blue', p: '10px', textDecorationColor:'red' }}
                value={value}
                min={0}
                step={5}
                max={100}                
                        onChange={handleChange}
                valueLabelDisplay="off"
                aria-labelledby="non-linear-slider"
            />
        </Box>
    );
}


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

export const TouchCarousel = () => {
    console.log("tt pass")
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

export default TouchCarousel;
//슬라이더와 페이지를 합쳐보면? 지금은 슬라이더가 위에있는데 슬라이더가 아래에 있게 꾸며보자

