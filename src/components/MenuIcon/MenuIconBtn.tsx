import React from 'react';
import { MdMenu } from 'react-icons/md';
import { Box } from '@mui/material';

type MenuIconBtnProps = {
    onClick: () => void;
};

const MenuIconBtn = ({ onClick }: MenuIconBtnProps) => {
    return (
        <Box onClick={onClick} sx={{ display: { xs: 'block', md: 'none' } }}>
            <MdMenu style={{ color: 'primary.light', width: 24, height: 24 }} />
        </Box>
    );
};

export default MenuIconBtn;
