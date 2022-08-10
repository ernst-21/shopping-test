import React from 'react';
import { Box, Typography } from '@mui/material';
import { AiOutlineUser } from 'react-icons/ai';
import { SxProps } from '../../types';

const AccountButton = ({ sx }: SxProps) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <AiOutlineUser
                className="appBarIcon"
                style={{
                    fontSize: 40,
                }}
            />
            <Typography sx={{ fontSize: '15px', ...sx }}>Sign in</Typography>
        </Box>
    );
};

export default AccountButton;
