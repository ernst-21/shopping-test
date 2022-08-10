import React, { useReducer, ReactNode, useEffect, useState } from 'react';
import { ICartProduct } from '../../interfaces';
import { CartContext, cartReducer } from './';

export interface CartState {
    isLoaded: boolean;
    cart: ICartProduct[];
    numberOfItems: number;
    total: number;
}

const CART_INITIAL_STATE: CartState = {
    isLoaded: false,
    cart: [],
    numberOfItems: 0,
    total: 0,
};

type ProviderProps = {
    children: ReactNode;
};

export const CartProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);
    const [mounted, setIsMounted] = useState(false);

    useEffect(() => {
        try {
            const localStorageProducts = localStorage.getItem('cart')
                ? JSON.parse(localStorage.getItem('cart')!)
                : [];
            dispatch({
                type: '[Cart] - LoadCart from cookie | storage',
                payload: localStorageProducts,
            });
            setIsMounted(true);
        } catch (e) {
            console.log(e);
            dispatch({
                type: '[Cart] - LoadCart from cookie | storage',
                payload: [],
            });
        }
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('cart', JSON.stringify(state.cart));
        }
    }, [state.cart, mounted]);

    useEffect(() => {
        const numberOfItems = state.cart.length;
        const total = state.cart.reduce(
            (prev, current: ICartProduct) =>
                current.price * current.quantity + prev,
            0
        );

        const orderSummary = {
            numberOfItems,
            total,
        };
        dispatch({
            type: '[Cart] - Update order summary',
            payload: orderSummary,
        });
    }, [state.cart, mounted]);

    const addProductsToCart = (products: ICartProduct[]) => {
        dispatch({
            type: '[Cart] - Update products in cart',
            payload: products,
        });
    };

    const updateCartQuantity = (product: ICartProduct) => {
        dispatch({ type: '[Cart] - Change cart quantity', payload: product });
    };

    const removeCartProduct = (product: ICartProduct) => {
        dispatch({ type: '[Cart] - Remove product in cart', payload: product });
    };

    return (
        <CartContext.Provider
            value={{
                ...state,
                addProductsToCart,
                updateCartQuantity,
                removeCartProduct,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
