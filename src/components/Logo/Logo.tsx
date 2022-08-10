import React from 'react';
import { Box, Typography } from '@mui/material';
import { SxProps } from '../../types';

const Logo = ({ sx }: SxProps) => {
    return (
        <Box
            sx={{
                ...sx,
                width: { xs: '100%', md: '172px' },
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
