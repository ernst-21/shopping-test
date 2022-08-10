import React, { memo, useMemo } from 'react';
import { CartListItemProps } from '../../../../types';
import { Card, CardActionArea, CardMedia, Grid, Link } from '@mui/material';
import { IMG_PRODUCT_PLACEHOLDER } from '../../constants/product';

const CartListImage = ({ product }: CartListItemProps) => {
    const productImage = useMemo(() => {
        return product.image
            ? `/products/${product.image}`
            : IMG_PRODUCT_PLACEHOLDER;
    }, [product.image]);

    return (
        <Grid item xs={3} md={2}>
            <Card>
                <Link>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={productImage}
                            alt={product.title}
                        />
                    </CardActionArea>
                </Link>
            </Card>
        </Grid>
    );
};

export default memo(CartListImage);
