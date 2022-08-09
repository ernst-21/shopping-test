import React from 'react';
import { Grid, Box } from '@mui/material';
import ContactInfo from './ContactInfo';
import { footerMenu, IMenu } from '../../../settings/navigation';
import FooterMenu from './FooterMenu';

const FooterMenuGrid = () => {
    return (
        <Grid
            sx={{ display: { xs: 'none', md: 'flex' } }}
            container
            spacing={2}
        >
            <ContactInfo />
            <Box sx={{ flexGrow: 1 }} />
            {footerMenu.map((menu: IMenu) => (
                <FooterMenu key={menu.title} menu={menu} />
            ))}
        </Grid>
    );
};

export default FooterMenuGrid;
