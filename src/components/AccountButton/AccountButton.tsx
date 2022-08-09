import React from 'react';
import { Box } from '@mui/material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const AccountButton = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PermIdentityOutlinedIcon sx={{ fontSize: 40, mr: 1 }} />
            <span>Sign in</span>
        </Box>
    );
};

export default AccountButton;
