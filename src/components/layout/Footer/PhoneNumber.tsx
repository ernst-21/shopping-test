import React from 'react';
import { Box, Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import { PHONE_NUMBER } from '../../../constants/contactInfo';

const PhoneNumber = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CallIcon sx={{ mr: 1 }} />
            <Typography sx={{ fontSize: '15px' }}>{PHONE_NUMBER}</Typography>
        </Box>
    );
};

export default PhoneNumber;
