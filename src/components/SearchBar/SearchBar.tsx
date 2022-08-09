import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

const SearchBar = () => {
    return (
        <TextField
            focused={false}
            size="small"
            variant="outlined"
            placeholder="Search products"
            sx={{
                backgroundColor: 'primary.light',
                borderRadius: 99,
                marginLeft: 2,
                width: { xs: '100%', md: '697px' },
            }}
            id="outlined-start-adornment"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon sx={{ fontSize: 24, color: '#001342' }} />
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default SearchBar;
