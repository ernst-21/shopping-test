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

type NavbarProps = {
    onOpen: () => void;
};

const Navbar = ({ onOpen }: NavbarProps) => {
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
                        <Logo sx={{ display: { xs: 'none', md: 'flex' } }} />
                        <MenuIconBtn onClick={onOpen} />
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
                            <AccountButton
                                sx={{
                                    display: { xs: 'none', lg: 'block' },
                                    ml: 1,
                                }}
                            />
                            <CartIcon
                                sx={{
                                    display: { xs: 'none', lg: 'block' },
                                    ml: 1,
                                }}
                            />
                        </Box>
                    </Toolbar>
                </PageWidthContainer>
            </AppBar>
        </Box>
    );
};

export default Navbar;
