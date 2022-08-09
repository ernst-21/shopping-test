import React, { memo } from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import { MdExpandMore } from 'react-icons/md';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import { IMenu, IMenuItem } from '../../../settings/navigation';
import { ListItem } from '@mui/material';

type CollapseItemProps = {
    menu: IMenu;
};

const CollapseItem = ({ menu }: CollapseItemProps) => {
    return (
        <Accordion
            variant={'outlined'}
            sx={{ backgroundColor: 'transparent', border: 'none' }}
        >
            <AccordionSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography sx={{ fontSize: '15px', fontWeight: 700 }}>
                    {menu.title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {menu.menuList?.map((item: IMenuItem) => (
                    <ListItem
                        sx={{ fontSize: '14px', color: 'text.secondary' }}
                        key={item.title}
                    >
                        {item.title}
                    </ListItem>
                ))}
            </AccordionDetails>
        </Accordion>
    );
};

export default memo(CollapseItem);
