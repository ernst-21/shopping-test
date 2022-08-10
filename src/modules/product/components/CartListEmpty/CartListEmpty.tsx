import React, { useCallback, useContext } from 'react';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardMedia,
    Grid,
    Link,
    Typography,
} from '@mui/material';
import { cartProducts } from '../../../../mockData/mockData';
import { CartContext } from '../../../../context/cart';

const CartListEmpty = () => {
    const { addProductsToCart } = useContext(CartContext);
    const addMockProducts = useCallback(() => {
        addProductsToCart(cartProducts);
    }, [addProductsToCart]);

    return (
        <Grid item xs={12}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <Card>
                    <Link>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={'/products/no-results.png'}
                                alt={'No products'}
                            />
                        </CardActionArea>
                    </Link>
                </Card>
                <Typography
                    sx={{ lineHeight: 1.5 }}
                    color={'text.secondary'}
                    variant="h2"
                >
                    ...Oops your cart seems to be empty
                </Typography>
                <Typography color={'text.secondary'} paragraph>
                    Click the button below to add mock data to the cart and
                    start evaluating the app
                </Typography>
                <Button
                    onClick={addMockProducts}
                    sx={{ width: 180, mt: 2 }}
                    size={'large'}
                >
                    Add mock products
                </Button>
            </Box>
        </Grid>
    );
};

export default CartListEmpty;
