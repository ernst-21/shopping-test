import React from 'react';
import { Box, Typography } from '@mui/material';
import { IoMdCall } from 'react-icons/all';
import { PHONE_NUMBER } from '../../../constants/contactInfo';

const PhoneNumber = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IoMdCall style={{ marginRight: 1 }} />
            <Typography sx={{ fontSize: '15px' }}>{PHONE_NUMBER}</Typography>
        </Box>
    );
};

export default PhoneNumber;
