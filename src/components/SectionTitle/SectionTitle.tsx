import React, { memo } from 'react';
import { Typography } from '@mui/material';

type SectionTitleProps = {
    title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
    return (
        <Typography sx={{ mb: 2, fontSize: ' 24px', fontWeight: 700 }}>
            {title}
        </Typography>
    );
};

export default memo(SectionTitle);
