import * as React from 'react';
import { useState, memo } from 'react';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import { Box, ListItem, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type SelectedItemProps = {
    selectedItem: any;
    label: string;
};

const SelectedItem = ({ selectedItem, label }: SelectedItemProps) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Typography sx={{ fontSize: '14px' }}>{label}:</Typography>
            <Typography sx={{ ml: 1, fontWeight: 600, fontSize: '14px' }}>
                {selectedItem}
            </Typography>
        </Box>
    );
};

type FooterSelectProps = {
    itemsList: any[];
    label: string;
    sx?: {};
};

const FooterSelect = ({ itemsList, label, sx }: FooterSelectProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedItem, setSelectedItem] = useState(itemsList[0]);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ ...sx }}>
            <Box
                display={'flex'}
                justifyContent={'flex-end'}
                alignItems={'center'}
            >
                <SelectedItem label={label} selectedItem={selectedItem} />
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: 4,
                    }}
                    onClick={handleClick}
                >
                    <ArrowDropDownIcon color="primary" />
                </div>
            </Box>

            <Menu
                sx={{ padding: 0 }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                {itemsList.map((item: string) => (
                    <ListItem
                        key={item}
                        sx={{
                            cursor: 'pointer',
                            '&:hover': { backgroundColor: 'secondary.light' },
                        }}
                        onClick={() => setSelectedItem(item)}
                    >
                        {item}
                    </ListItem>
                ))}
            </Menu>
        </Box>
    );
};

export default memo(FooterSelect);
