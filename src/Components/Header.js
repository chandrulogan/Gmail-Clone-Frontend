import React from 'react';
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import InputBase from '@mui/material/InputBase';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { gmailLogo } from '../Constants/Constants';

const StyledAppBar = styled(AppBar)({
  background: '#f6f8fc',
  boxShadow: 'none',
  cursor: 'pointer',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 99999, // Adjust the z-index value if necessary
});

const SearchWrapper = styled(Box)({
  background: '#eaf1fb',
  marginLeft: 80,
  borderRadius: 50,
  minWidth: 690,
  maxWidth: 720,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
  '& > div': {
    width: '100%',
    padding: '0 10px',
  },
});

const OptionsWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'end',
  '& > svg': {
    marginLeft: 20,
  },
});

function Header({ toggleDrawer }) {
  return (
    <StyledAppBar position='static'>
      <Toolbar>
        <MenuIcon color='action' onClick={toggleDrawer} />
        <img src={gmailLogo} alt='logo' style={{ width: 110, marginLeft: 15 }} />
        <SearchWrapper>
          <SearchIcon color='action' />
          <InputBase placeholder='Search mail' />
          <TuneIcon color='action' />
        </SearchWrapper>
        <OptionsWrapper>
          <HelpOutlineOutlinedIcon color='action' />
          <SettingsOutlinedIcon color='action' />
          <AppsOutlinedIcon color='action' />
          <AccountCircleOutlinedIcon color='action' />
        </OptionsWrapper>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
