import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';

const MenuIconBtn = () => {
    return (
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <MenuIcon sx={{ color: 'primary.light', width: 24, height: 24 }} />
        </Box>
    );
};

export default MenuIconBtn;
