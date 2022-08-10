import React from 'react';
import { Box, Typography } from '@mui/material';
import { AiOutlineUser } from 'react-icons/ai';

const AccountButton = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AiOutlineUser
                className="appBarIcon"
                style={{
                    fontSize: 40,
                    marginRight: 1,
                }}
            />
            <Typography
                sx={{ fontSize: '15px', display: { xs: 'none', lg: 'block' } }}
            >
                Sign in
            </Typography>
        </Box>
    );
};

export default AccountButton;
