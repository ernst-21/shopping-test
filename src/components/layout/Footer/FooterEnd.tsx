import React from 'react';
import { PageWidthContainer } from '../PageWidthContainer';
import { Box, Typography } from '@mui/material';
import FooterSelect from './FooterSelect';

const year = new Date().getFullYear();
const REGIONS = ['United States', 'Europe'];
const LANGUAGES = ['English', 'Spanish'];

const FooterEnd = () => {
    return (
        <PageWidthContainer sx={{ backgroundColor: 'secondary.light' }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingY: 6,
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box
                    sx={{
                        flexGrow: 1,
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    <Typography
                        sx={{ color: 'text.secondary', fontSize: '14px' }}
                    >
                        @ {year} Customer Products. All Rights reserved
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                >
                    <FooterSelect
                        label={'Region'}
                        itemsList={REGIONS}
                        sx={{ mr: 2 }}
                    />
                    <FooterSelect label={'Language'} itemsList={LANGUAGES} />
                </Box>
            </Box>
        </PageWidthContainer>
    );
};

export default FooterEnd;
