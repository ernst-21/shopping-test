import React from 'react';
import { Grid } from '@mui/material';
import { CartList } from '../../components/CartList';
import { OrderSummary } from '../../components/OrderSummary';

const CartListContainer = () => {
    return (
        <Grid sx={{ marginY: 6 }} container rowSpacing={2}>
            <CartList />
            <OrderSummary />
        </Grid>
    );
};

export default CartListContainer;
