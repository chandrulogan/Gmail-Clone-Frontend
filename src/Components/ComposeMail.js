import React, { useState } from 'react';
import { Dialog, Box, Typography, styled, InputBase, TextField, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import env from "../environment"
import axios from 'axios'

const dialogStyle = {
  height: '90%',
  width: '80%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  borderRadius: '10px 10px 0 0',
  zIndex: 9999,
  marginTop: '64px'
}

const Header = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 15px',
  background: '#f2f6fc',
  '% > p': {
    fontSize: 14,
    fontWeight: 500
  }
})

const InputWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 15px',
  '& > div': {
    fontSize: 14,
    borderBottom: '1px solid #f2f6fc',
    marginTop: 10
  }
})

const Footer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 15px'
})

const SendButton = styled(Button)({
  background: '#0b57d0',
  color: '#fff',
  borderRadius: 50,
  fontWeight: 500,
  textTransform: 'none',
})

function ComposeMail({ openDialog, setOpenDialog }) {

  console.log(env);
  let [to, setTo] = useState("")
  let [subject, setSubject] = useState("")
  let [text, setText] = useState("")

  const closeComposeMail = (e) => {
    e.preventDefault();
    setOpenDialog(false)
  }

  let sendingMail = async () => {
    let res = await axios.post(`${env.apiurl}/users/sendmail`, {
      to,
      subject,
      text
    })
    if (res.data.statusCode === 200 || 204) {
      console.log('Mail sent Successfully');
      setOpenDialog(false);
    } else {
      console.log('Issue in sending mail');
    }
  }

  const sendMail = () => {
    sendingMail();
    setOpenDialog(false);
  }

  return (
    <Dialog
      open={openDialog}
      PaperProps={{ sx: dialogStyle }}
    >
      <Header>
        <Typography>New Message</Typography>
        <CloseIcon fontSize='small' onClick={(e) => closeComposeMail(e)} />
      </Header>
      <InputWrapper>
        <InputBase placeholder='To' onChange={(e) => setTo(e.target.value)} />
        <InputBase placeholder='Subject' onChange={(e) => setSubject(e.target.value)} />
      </InputWrapper>
      <TextField
        multiline
        rows={20}
        sx={{
          '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
        }}
        onChange={(e) => setText(e.target.value)}
      />
      <Footer>
        <SendButton onClick={() => sendMail()}>Send</SendButton>
        <DeleteOutlineIcon onClick={() => setOpenDialog(false)} />
      </Footer>
    </Dialog>
  )
}

export default ComposeMail
