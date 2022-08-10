import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { Navbar } from './Navbar';
import { NavigationBar } from './NavigationBar';
import { PageWidthContainer } from './PageWidthContainer';
import { Footer } from './Footer';
import { SideBar } from './Sidebar';
import useToggle from '../../hooks/utils/useToggle';

type LayoutProps = {
    children: ReactNode;
};

const MainLayout = ({ children }: LayoutProps) => {
    const { isOpen, onOpen, onClose } = useToggle();
    return (
        <Box>
            <Navbar onOpen={onOpen} />
            <main>
                <NavigationBar />
                <PageWidthContainer>{children}</PageWidthContainer>
            </main>
            <SideBar open={isOpen} onClose={onClose} />
            <Footer />
        </Box>
    );
};

export default MainLayout;
