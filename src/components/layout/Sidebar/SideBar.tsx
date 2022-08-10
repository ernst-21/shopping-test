import React, { memo, useEffect } from 'react';
import { Box, Divider, Drawer, List, ListItem } from '@mui/material';
import { mainMenu } from '../../../settings/navigation';
import { Logo } from '../../Logo';
import UserMenu from './UserMenu';

type SideBarProps = {
    open: boolean;
    onClose: () => void;
};

const SideBar = ({ onClose, open }: SideBarProps) => {
    useEffect(() => {
        onClose();
    }, [onClose]);

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    padding: 2,
                    backgroundColor: (theme) =>
                        // @ts-ignore
                        theme.palette.background.paper,
                    width: 280,
                },
            }}
            sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
            variant="temporary"
        >
            <Box sx={{ width: '100%', mb: 1 }} onClick={onClose}>
                <Logo sx={{ display: 'flex' }} />
            </Box>
            <List component="nav" aria-labelledby="nested-list-subheader">
                {mainMenu.map((item) => (
                    <ListItem onClick={onClose} key={item.id}>
                        {item.title}
                    </ListItem>
                ))}
                <Divider sx={{ mt: 1 }} />
                <UserMenu />
            </List>
        </Drawer>
    );
};

export default memo(SideBar);
