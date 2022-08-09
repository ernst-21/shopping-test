import React from 'react';
import { Box, Link } from '@mui/material';
import { mainMenu } from '../../../settings/navigation';
import { PageWidthContainer } from '../PageWidthContainer';

type LinkProps = {
    id: string;
    title: string;
};

const NavigationBar = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '66px',
                backgroundColor: 'secondary.light',
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
            }}
        >
            <PageWidthContainer>
                {mainMenu.map((item: LinkProps) => (
                    <Link sx={{ mr: 3, color: 'text.secondary' }} key={item.id}>
                        {item.title}
                    </Link>
                ))}
            </PageWidthContainer>
        </Box>
    );
};

export default NavigationBar;
