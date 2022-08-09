import * as React from 'react';
import { footerMenu, IMenu } from '../../../settings/navigation';
import CollapseItem from './CollapseItem';
import { Box } from '@mui/material';
import ContactInfo from './ContactInfo';

const AccordionMenu = () => {
    return (
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            {footerMenu.map((menu: IMenu) => (
                <CollapseItem key={menu.title} menu={menu} />
            ))}
            <Box
                sx={{
                    mt: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <ContactInfo />
            </Box>
        </Box>
    );
};

export default AccordionMenu;
