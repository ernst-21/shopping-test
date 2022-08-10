import * as React from 'react';
import { useState, memo, useCallback } from 'react';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import { Box, List, ListItem, Typography } from '@mui/material';
import { MdExpandMore } from 'react-icons/md';

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

type ItemsSelectProps = {
    itemsList: any[];
    label: string;
    sx?: {};
    callback?: (item: any) => void;
    selected?: any;
};

const ItemsSelect = ({
    itemsList,
    label,
    sx,
    callback,
    selected,
}: ItemsSelectProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedItem, setSelectedItem] = useState(
        selected ? selected : itemsList[0]
    );
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = useCallback(
        (item) => {
            setSelectedItem(item);
            if (callback) {
                callback(item);
            }
        },
        [callback]
    );

    return (
        <Box sx={{ ...sx }}>
            <Box display={'flex'} alignItems={'center'}>
                <SelectedItem label={label} selectedItem={selectedItem} />
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: 4,
                    }}
                    onClick={handleClick}
                >
                    <MdExpandMore color="primary" />
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
                <List>
                    {itemsList.map((item: string) => (
                        <ListItem
                            key={item}
                            sx={{
                                cursor: 'pointer',
                                border: 'none',
                                '&:hover': {
                                    backgroundColor: 'secondary.light',
                                },
                            }}
                            onClick={() => handleSelect(item)}
                        >
                            {item}
                        </ListItem>
                    ))}
                </List>
            </Menu>
        </Box>
    );
};

export default memo(ItemsSelect);
