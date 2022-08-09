import React, { memo } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { IMenu, IMenuItem } from '../../../settings/navigation';

type FooterMenuProps = {
    menu: IMenu;
};

const FooterMenu = ({ menu }: FooterMenuProps) => {
    return (
        <Grid item md={3}>
            <Stack spacing={2}>
                <Typography sx={{ fontWeight: 700 }}>{menu?.title}</Typography>
                {menu.menuList?.map((item: IMenuItem) => (
                    <Typography
                        sx={{ fontSize: '15px', color: 'text.secondary' }}
                        key={item.title}
                    >
                        {item.title}
                    </Typography>
                ))}
            </Stack>
        </Grid>
    );
};

export default memo(FooterMenu);
