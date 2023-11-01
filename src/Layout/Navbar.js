import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import HomeIcon from '@mui/icons-material/Home';
import { Link} from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const PinkTextTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const BlackBackgroundAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'black',
}));
const LightPinkTextTypography = styled(Typography)(({ theme }) => ({
    color: '#ab47bc', // light pink color
  }));

  const CustomIconButton = styled(IconButton)({
    color: '#ab47bc', // Your custom color
  });

const SearchAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BlackBackgroundAppBar position="static">
        <Toolbar>
        <Link to={"/"}>
        <CustomIconButton size="large" edge="start" aria-label="open drawer" sx={{ mr: 2 }}>
       
        <HomeIcon />
      
      </CustomIconButton>
      </Link>
          <LightPinkTextTypography variant="h6" noWrap component="div" sx={{ flexGrow: 5, }}>
          EIKOMP
        </LightPinkTextTypography>
          
        </Toolbar>
      </BlackBackgroundAppBar>
    </Box>
  );
};

export default SearchAppBar;
