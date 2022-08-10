import React, { useContext, useMemo } from 'react';
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { SectionTitle } from '../../../../components/SectionTitle';
import { CartContext } from '../../../../context/cart';
import { format } from '../../../../utils';

const OrderSummary = () => {
    const { total, cart, numberOfItems } = useContext(CartContext);
    const finalPrice = useMemo(() => {
        return format(total);
    }, [total]);

    if (!cart || !cart.length) return null;

    return (
        <Grid
            sx={{ paddingLeft: { md: 4 }, mt: { xs: 2, md: 1 } }}
            item
            xs={12}
            md={3}
        >
            <SectionTitle title={'Order Summary'} />
            <Stack spacing={2}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Number of items
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        {numberOfItems}
                    </Typography>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                        sx={{
                            color: 'primary.dark',
                            fontSize: '18px',
                            fontWeight: 600,
                        }}
                    >
                        Total:
                    </Typography>
                    <Typography
                        sx={{
                            color: 'primary.dark',
                            fontWeight: 700,
                            fontSize: '24px',
                        }}
                    >
                        {finalPrice}
                    </Typography>
                </Box>
                <Button size="large">
                    <Typography sx={{ fontWeight: 700 }}>
                        Proceed to checkout
                    </Typography>
                </Button>
                <Button
                    sx={{ borderColor: 'primary.dark' }}
                    variant="outlined"
                    size="large"
                >
                    <Typography sx={{ fontWeight: 700 }} color={'primary.dark'}>
                        Continue shopping
                    </Typography>
                </Button>
            </Stack>
        </Grid>
    );
};

export default OrderSummary;
