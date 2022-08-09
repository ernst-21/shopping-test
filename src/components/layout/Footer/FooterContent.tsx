import React from 'react';
import { PageWidthContainer } from '../PageWidthContainer';
import FooterMenuGrid from './FooterMenuGrid';
import AccordionMenu from './AccordionMenu';

const FooterContent = () => {
    return (
        <PageWidthContainer
            sx={{ backgroundColor: 'secondary.light', paddingTop: 8 }}
        >
            <FooterMenuGrid />
            <AccordionMenu />
        </PageWidthContainer>
    );
};

export default FooterContent;
