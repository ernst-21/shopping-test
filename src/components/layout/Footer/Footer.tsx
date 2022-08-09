import React from 'react';
import { Stack } from '@mui/material';
import FooterEnd from './FooterEnd';
import FooterContent from './FooterContent';

const Footer = () => {
    return (
        <Stack sx={{ backgroundColor: 'secondary.light' }}>
            <FooterContent />
            <FooterEnd />
        </Stack>
    );
};

export default Footer;
