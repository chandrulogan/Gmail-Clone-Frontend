import { Box, Button, styled, List } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import React, { useState } from 'react';
import { SIDEBAR_DATA } from '../Config/Sidebar.config';
import ComposeMail from './ComposeMail';
import { Link } from 'react-router-dom';

const ComposeButton = styled(Button)({
  background: '#c2e7ff',
  color: '#001d35',
  padding: 16,
  borderRadius: 16,
  minWidth: 140,
  textTransform: 'none',
});

const Containerwrapper = styled(Box)({
  padding: 8,
  '& > ul': {
    padding: '10px 0 0 5px',
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
  },
  '& > ul > li > svg': {
    marginRight: 20,
  },
});

const SidebarLink = styled(Link)(({ isDelete }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  '& > svg': {
    marginRight: 10,
  },
  '&:not(:last-child)': {
    marginBottom: '1rem',
    marginLeft: 15,
  },
  '& > span': {
    fontSize: 15,
    marginLeft: 10,
  },
  ...(isDelete && {
    marginLeft: 15,
  }),
}));

function SideBarContent() {
  const [openDialog, setOpenDialog] = useState(false);

  const onClickCompose = () => {
    setOpenDialog(true);
  };

  return (
    <Containerwrapper>
      <Box>
        <ComposeButton onClick={onClickCompose}>
          <CreateOutlinedIcon />
          Compose
        </ComposeButton>
      </Box>
      <List>
        {SIDEBAR_DATA.map((data) => (
          <SidebarLink
            key={data.name}
            to={data.link}
            isDelete={data.name === 'delete'}
          >
            {React.createElement(data.icon)}
            <span>{data.title}</span>
          </SidebarLink>
        ))}
      </List>
      <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Containerwrapper>
  );
}

export default SideBarContent;
