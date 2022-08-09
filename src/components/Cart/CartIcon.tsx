import React from 'react';
import { Box } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const CartIcon = () => {
    return (
        <Box sx={{ ml: 2, mt: 0.5, position: 'relative' }}>
            <ShoppingBagOutlinedIcon
                className="appBarIcon"
                sx={{ fontSize: 40 }}
            />
            <Box
                style={{
                    zIndex: 900,
                    position: 'absolute',
                    top: 12,
                    right: 15,
                }}
            >
                8
            </Box>
        </Box>
    );
};

export default CartIcon;
