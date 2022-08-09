import React from 'react';
import { PageWidthContainer } from '../PageWidthContainer';
import FooterMenuGrid from './FooterMenuGrid';

const FooterContent = () => {
    return (
        <PageWidthContainer
            sx={{ backgroundColor: 'secondary.light', paddingTop: 8 }}
        >
            <FooterMenuGrid />
        </PageWidthContainer>
    );
};

export default FooterContent;
