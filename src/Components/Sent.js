import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ComponentsStyle.css'
import Checkbox from '@mui/material/Checkbox';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

import env from '../environment'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Emails({ openDrawer }) {
  const [maildata, setMaildata] = useState([]);

  useEffect(() => {
    fetchMailData();
  }, []);

  const fetchMailData = () => {
    axios
      .get(`${env.apiurl}/users/mails`)
      .then(response => {
        setMaildata(response.data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  };

  const deleteMail = (mailId) => {
    axios
      .delete(`${env.apiurl}/users/mails/${mailId}`)
      .then(response => {
        console.log(response.data);
        fetchMailData(); // Fetch updated mail data after deletion
      })
      .catch(error => {
        console.error('Error deleting mail:', error);
      });
  };

  return (
    <div style={openDrawer ? { marginLeft: 250, width: '83.5%' } : { width: '100%' }} className='main-style'>
      <div className='Mail-Navbar-wrapper'>
        <div className='Mail-Navbar-style'>
          <Checkbox {...label} />
          <DeleteOutlineOutlinedIcon />
        </div>
      </div>

      <div className='Mail-Content-Navbar-wrapper'>
        <div className='Mail-Content-Navbar-style'>
          <div className='padding'>
            <InboxOutlinedIcon className='Icon-style' />Primary
          </div>
          <div className='padding'>
            <StyleOutlinedIcon className='Icon-style' />Promotion
          </div>
          <div className='padding'>
            <PeopleAltOutlinedIcon className='Icon-style' />Social
          </div>
        </div>
      </div>
      <div>
        <div>
          {maildata.map((maildata) => (
            <div key={maildata._id} className='mail-content-style'>
              <Checkbox {...label} />
              <StarBorderOutlinedIcon className='mail-content-gap'/>
              <p className='mail-content-gap'>To:</p><h5>{maildata.to}</h5>
              <h4>{maildata.subject}</h4>
              <p>{maildata.text}</p>
              <div className='mail-content-delete-icon-style' onClick={() => deleteMail(maildata._id)}>
                <DeleteOutlineOutlinedIcon />
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Emails;
