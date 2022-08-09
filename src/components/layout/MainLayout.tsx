import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { Navbar } from './Navbar';
import { NavigationBar } from './NavigationBar';
import { PageWidthContainer } from './PageWidthContainer';
import { Footer } from './Footer';

type LayoutProps = {
    children: ReactNode;
};

const MainLayout = ({ children }: LayoutProps) => {
    return (
        <Box>
            <Navbar />
            <main>
                <NavigationBar />
                <PageWidthContainer>{children}</PageWidthContainer>
            </main>
            <Footer />
        </Box>
    );
};

export default MainLayout;
