import React from 'react';
import { Stack, Typography } from '@mui/material';
import { ProductList } from '../../components/ProductList';
import { products } from '../../../../mockData/mockData';

const MIGHT_LIKE_PRODUCTS = products.slice(4);

const MightLikeContainer = () => {
    return (
        <Stack sx={{ my: 12 }}>
            <Typography sx={{ mb: 2, fontSize: 24, fontWeight: 700 }}>
                You might also like
            </Typography>
            <ProductList products={MIGHT_LIKE_PRODUCTS} />
        </Stack>
    );
};

export default MightLikeContainer;
