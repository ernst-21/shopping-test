import React, { memo, useCallback, useContext } from 'react';
import { CartListItemProps } from '../../../../types';
import { Box, Stack, Typography } from '@mui/material';
import { RiDeleteBinLine } from 'react-icons/ri';
import { ItemsSelect } from '../../../../components/ItemsSelect';
import { CartContext } from '../../../../context/cart';
import { PRODUCTS_QTY } from '../../constants/product';

const CartListInfo = ({ product }: CartListItemProps) => {
    const { updateCartQuantity, removeCartProduct } = useContext(CartContext);

    const handleQuantityChange = useCallback(
        (item: number) => {
            const productToUpdate = { ...product, quantity: item };
            updateCartQuantity(productToUpdate);
        },
        [product, updateCartQuantity]
    );

    const handleRemove = useCallback(() => {
        removeCartProduct(product);
    }, [product, removeCartProduct]);

    return (
        <Box>
            <Stack spacing={2}>
                <Typography
                    sx={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: 'primary.dark',
                    }}
                >
                    {product.title}
                </Typography>
                <ItemsSelect
                    label={'Quantity'}
                    itemsList={PRODUCTS_QTY}
                    callback={(item) => handleQuantityChange(item)}
                    selected={product.quantity}
                />
                <Box
                    onClick={handleRemove}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                >
                    <RiDeleteBinLine />
                    <Typography
                        sx={{ ml: 1, fontSize: '12px', fontWeight: 600 }}
                    >
                        Remove
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
};

export default memo(CartListInfo);
