import React from 'react';
import { Grid, Divider } from '@mui/material';
import { CartListItemProps } from '../../../../types';
import CartListImage from './CartListImage';
import CartListInfo from './CartListInfo';
import CartListPrice from './CartListPrice';

const CartListItem = ({ product }: CartListItemProps) => {
    return (
        <>
            <Grid container spacing={2} sx={{ display: 'flex', my: 2 }}>
                <CartListImage product={product} />
                <Grid
                    item
                    xs={9}
                    md={10}
                    sx={{
                        display: 'flex',
                        justifyContent: { md: 'space-between' },
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                >
                    <CartListInfo product={product} />
                    <CartListPrice product={product} />
                </Grid>
            </Grid>
            <Divider />
        </>
    );
};

export default CartListItem;
