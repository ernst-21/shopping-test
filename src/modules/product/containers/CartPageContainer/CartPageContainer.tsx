import React from 'react';
import { MightLikeContainer } from '../MightLikeContainer';
import { Stack } from '@mui/material';
import { CartListContainer } from '../CartListContainer';

const CartPageContainer = () => {
    return (
        <Stack>
            <CartListContainer />
            <MightLikeContainer />
        </Stack>
    );
};

export default CartPageContainer;
