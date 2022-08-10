import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { BsHandbag } from 'react-icons/all';
import { CartContext } from '../../context/cart';

const CartIcon = () => {
    const { numberOfItems } = useContext(CartContext);
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ ml: 2, mt: 0.5, position: 'relative' }}>
                <BsHandbag className="appBarIcon" style={{ fontSize: 36 }} />
                <Box
                    style={{
                        zIndex: 900,
                        position: 'absolute',
                        top: 13,
                        right: 13,
                    }}
                >
                    {numberOfItems}
                </Box>
            </Box>
            <Typography
                sx={{
                    ml: 1,
                    fontSize: '15px',
                    display: { xs: 'none', lg: 'block' },
                }}
            >
                Cart
            </Typography>
        </Box>
    );
};

export default CartIcon;
