import React, { memo, useMemo } from 'react';
import { CartListItemProps } from '../../../../types';
import { Box, Stack, Typography } from '@mui/material';
import { format } from '../../../../utils';

const CartListPrice = ({ product }: CartListItemProps) => {
    const productPrice = useMemo(() => {
        return format(product.price);
    }, [product.price]);

    const priceByQty = useMemo(() => {
        return format(product.price * product.quantity);
    }, [product.price, product.quantity]);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
            }}
        >
            <Stack spacing={1}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Typography sx={{ fontWeight: 700, color: 'primary.dark' }}>
                        {productPrice}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    Total:{' '}
                    <Typography
                        sx={{ fontWeight: 700, color: 'primary.dark', ml: 1 }}
                    >
                        {priceByQty}
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
};

export default memo(CartListPrice);
