import React from 'react';
import { List, ListItem } from '@mui/material';
import { AccountButton } from '../../AccountButton';
import { CartIcon } from '../../Cart';

const UserMenu = () => {
    return (
        <List>
            <ListItem>
                <AccountButton />
            </ListItem>
            <ListItem>
                <CartIcon />
            </ListItem>
        </List>
    );
};

export default UserMenu;
