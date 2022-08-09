import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { SearchBar } from '../../SearchBar';
import { Logo } from '../../Logo';
import { MenuIconBtn } from '../../MenuIcon';
import { AccountButton } from '../../AccountButton';
import { CartIcon } from '../../Cart';
import { PageWidthContainer } from '../PageWidthContainer';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <PageWidthContainer
                    sx={{
                        height: '100%',
                    }}
                >
                    <Toolbar
                        sx={{
                            height: '100%',
                            paddingX: '0px !important',
                        }}
                    >
                        <Logo />
                        <MenuIconBtn />
                        <SearchBar />
                        <Box sx={{ flexGrow: 1 }} />
                        <Box
                            sx={{
                                display: {
                                    xs: 'none',
                                    md: 'flex',
                                    alignItems: 'center',
                                },
                            }}
                        >
                            <AccountButton />
                            <CartIcon />
                        </Box>
                    </Toolbar>
                </PageWidthContainer>
            </AppBar>
        </Box>
    );
};

export default Navbar;
