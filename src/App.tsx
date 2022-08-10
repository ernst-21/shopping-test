import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { lightTheme } from './themes';
import { MainLayout } from './components/layout';
import { CartPageContainer } from './modules/product/containers/CartPageContainer';
import { CartProvider } from './context/cart';

function App() {
    return (
        <CartProvider>
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <MainLayout>
                    <CartPageContainer />
                </MainLayout>
            </ThemeProvider>
        </CartProvider>
    );
}

export default App;
