import React, { useContext } from 'react';
import { CartContext } from '../../../../context/cart';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { SectionTitle } from '../../../../components/SectionTitle';
import { ICartProduct } from '../../../../interfaces';
import { CartListItem } from '../CartListItem';
import { CartListEmpty } from '../CartListEmpty';

const CartList = () => {
    const { cart, numberOfItems } = useContext(CartContext);

    if (!cart || !cart.length) {
        return <CartListEmpty />;
    }

    return (
        <Grid item xs={12} md={9}>
            <Box sx={{ display: 'flex', alignItems: ' center' }}>
                <SectionTitle title={'Your cart'} />
                <Typography
                    paragraph
                    sx={{ color: 'text.secondary', fontSize: '20px', ml: 0.5 }}
                >
                    ({numberOfItems})
                </Typography>
            </Box>
            <Stack>
                {cart.map((product: ICartProduct) => (
                    <CartListItem key={product._id} product={product} />
                ))}
            </Stack>
        </Grid>
    );
};

export default CartList;
