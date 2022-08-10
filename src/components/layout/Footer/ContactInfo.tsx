import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { Logo } from '../../Logo';
import PhoneNumber from './PhoneNumber';
import SocialIcons from './SocialIcons';

const ContactInfo = () => {
    return (
        <Grid item md={2}>
            <Stack
                spacing={3}
                sx={{ alignItems: { xs: 'center', md: 'start' } }}
            >
                <Logo sx={{ display: { xs: 'none', md: 'flex' } }} />
                <Box>
                    <Typography
                        sx={{ fontSize: '15px', color: 'text.secondary' }}
                    >
                        We sell custom products for all your needs. Packs and
                        bulk products that you will enjoy.
                    </Typography>
                </Box>
                <PhoneNumber />
                <SocialIcons />
            </Stack>
        </Grid>
    );
};

export default ContactInfo;
