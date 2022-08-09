import React from 'react';
import { Box, Typography } from '@mui/material';

const Logo = () => {
    return (
        <Box
            sx={{
                display: { xs: 'none', md: 'flex' },
                width: { xs: 'fit-content', md: '172px' },
                justifyContent: 'center',
                height: '48px',
                backgroundColor: '#CED0D3',
                alignItems: 'center',
            }}
        >
            <Typography
                sx={{
                    fontSize: '13px',
                    lineHeight: 0,
                    color: 'secondary.main',
                }}
            >
                LOGO
            </Typography>
        </Box>
    );
};

export default Logo;
