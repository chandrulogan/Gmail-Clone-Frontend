import React from 'react';
import Drawer from '@mui/material/Drawer';
import SideBarContent from './SideBarContent';


function Sidebar({openDrawer}) {
  return (
    <Drawer
        anchor='left'
        open={openDrawer}
        hideBackdrop={true}
        ModalProps={{
            keepMounted: true
        }}
        variant='persistent'
        sx={{
            '& .MuiDrawer-paper':{
                marginTop:'64px',
                width: 250,
                background:'#f6f8fc',
                borderRight:'none',
                height:'100%'
            }
        }}
    >
        <SideBarContent/>
    </Drawer>
  )
}

export default Sidebar