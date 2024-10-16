import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';

const marks = [
    {
        value: 0,
        label: <div>0</div>,
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



export default function NonLinearSlider2() {
    const [value, setValue] = React.useState<number>(0);

    const handleChange = (event: Event, newValue: number | number[]) => {
        console.log('oksk', newValue);
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };

    return (
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '80vh', border: '1px solid green' }}>
            <Typography id="non-linear-slider" gutterBottom sx={{ border: '1px solid red', }} >
                앞에서! : {valueLabelFormat(value)}
            </Typography>
            <Divider />
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
