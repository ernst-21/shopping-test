import {
    Box,
    Card,
    CardActionArea,
    CardMedia,
    Grid,
    Link,
    Typography,
} from '@mui/material';
import React, { FC, useMemo, useState } from 'react';
import { IProduct } from '../../../../interfaces';

interface Props {
    product: IProduct;
}

const ProductCard: FC<Props> = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const productImage = useMemo(() => {
        return isHovered
            ? `/products/${product.images[1]}`
            : `/products/${product.images[0]}`;
    }, [isHovered, product.images]);

    return (
        <Grid
            item
            xs={6}
            sm={3}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card>
                <Link>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={productImage}
                            alt={product.title}
                            onLoad={() => setIsImageLoaded(true)}
                        />
                    </CardActionArea>
                </Link>
            </Card>
            <Box sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }}>
                <Typography fontWeight={700} sx={{ fontSize: '16px' }}>
                    {product.title}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                >
                    <Typography fontWeight={600} sx={{ fontSize: '15px' }}>
                        ${product.price}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '15px',
                            color: 'text.secondary',
                            mr: 6,
                        }}
                    >
                        Minimum: {product.inStock}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    );
};

export default ProductCard;
