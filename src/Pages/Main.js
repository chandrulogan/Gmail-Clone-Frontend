import React, { useState } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Emails from '../Components/Emails';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Starred from '../Components/Starred';
import Snoozed from '../Components/Snoozed';
import Sent from '../Components/Sent';
import Draft from '../Components/Draft';
import Delete from '../Components/Delete';


function Main() {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  return (
    <BrowserRouter>
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar openDrawer={openDrawer} />
      <Routes>
        <Route path='/inbox' element={<Emails openDrawer={openDrawer}/>}/>
        <Route path='/starred' element={<Starred openDrawer={openDrawer}/>}/>
        <Route path='/snoozed' element={<Snoozed openDrawer={openDrawer}/>}/>
        <Route path='/sent' element={<Sent openDrawer={openDrawer}/>}/>
        <Route path='/draft' element={<Draft openDrawer={openDrawer}/>}/>
        <Route path='/delete' element={<Delete openDrawer={openDrawer}/>}/>      
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
