import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3A4451',
            light: '#fff',
            dark: '#091625',
        },
        secondary: {
            main: '#848A92',
            light: '#E6E8E9',
        },
        info: {
            main: '#fff',
        },
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    backgroundColor: '#091625',
                    height: '88px',
                },
            },
        },

        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 30,
                    fontWeight: 600,
                },
                h2: {
                    fontSize: 20,
                    fontWeight: 400,
                },
                subtitle1: {
                    fontSize: 18,
                    fontWeight: 600,
                },
            },
        },

        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'medium',
                disableElevation: true,
                //color: "primary",
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: '8px',
                    ':hover': {
                        transition: 'all 0.3s ease-in-out',
                    },
                },
            },
        },

        MuiCard: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    borderRadius: '4px',
                },
            },
        },
    },
});
