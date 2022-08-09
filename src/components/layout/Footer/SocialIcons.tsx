import React from 'react';
import { Box } from '@mui/material';
import { socialIcons } from '../../../constants/socialIcons';

const SocialIcons = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            {socialIcons.map((item: any, index: number) => {
                const Icon = item.icon;
                return (
                    <Icon
                        sx={{ fontSize: 28, color: '#535C67', mr: 1 }}
                        key={index}
                    />
                );
            })}
        </Box>
    );
};

export default SocialIcons;
