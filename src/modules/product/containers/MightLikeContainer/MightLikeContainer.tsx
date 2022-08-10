import React from 'react';
import { Stack } from '@mui/material';
import { ProductList } from '../../components/ProductList';
import { products } from '../../../../mockData/mockData';
import { SectionTitle } from '../../../../components/SectionTitle';

const MIGHT_LIKE_PRODUCTS = products.slice(4);

const MightLikeContainer = () => {
    return (
        <Stack sx={{ marginY: 6 }}>
            <SectionTitle title={'You might also like'} />
            <ProductList products={MIGHT_LIKE_PRODUCTS} />
        </Stack>
    );
};

export default MightLikeContainer;
