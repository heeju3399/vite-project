import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react"

export default function SAA() {
    const [isDark, setDark] = useState(false);

    const onClickDarkBTN = () => {
        setDark(!isDark);
    }

    return (
        <Container sx={{
            backgroundColor: isDark ? 'black' : 'white',
            color: isDark ? 'white' : 'black',
            width: '100%', height: '100%',
            p: 0,
        }}>
            <Box sx={{
                backgroundColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : 'black',
                width: '100%', height: '100vh'
            }}>
                <Typography>e다크모드 테스트</Typography>
                <Button onClick={onClickDarkBTN}>change</Button>
            </Box>
            import Button from '@mui/material/Button';

            <Button
                sx={[
                    (theme) => ({
                        color: '#fff',
                        backgroundColor: theme.palette.primary.main,
                        ...theme.applyStyles('dark', {
                            backgroundColor: theme.palette.secondary.main,
                        }),
                        '&:hover': {
                            boxShadow: theme.shadows[3],
                            backgroundColor: theme.palette.primary.dark,
                            ...theme.applyStyles('dark', {
                                backgroundColor: theme.palette.secondary.dark,
                            }),
                        },
                    }),
                ]}
            >
                Submit
            </Button>;

        </Container>
    )
}

import { styled } from '@mui/material/styles';

const MyComponent = styled('div')(({ theme }) => ({
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.secondary.main,
    }),
    '&:hover': {
        boxShadow: theme.shadows[3],
        backgroundColor: theme.palette.primary.dark,
        ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.secondary.dark,
        }),
    },
}));
