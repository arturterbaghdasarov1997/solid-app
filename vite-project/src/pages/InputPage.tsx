import React, { useState } from 'react'
import MyInput from '../components/input/MyInput';
import { EmailIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

const InputPage:React.FC = () => {
    const [show, setShow] = useState(false)

  return (
    <>
        <MyInput variant='outline' placeholder='Full Name' type='text' />
        <br />
        <MyInput variant='flushed' placeholder='Username' type='text' />
        <br />
        <MyInput leftAddon='+995' variant='outline' placeholder='Phone Number' type='text' />
        <br />
        <MyInput leftAddon={<EmailIcon color={'blue'} />} variant='outline' placeholder='Email Address' type='text' />
        <br />
        <MyInput leftAddon='https//:' rightAddon='.com' variant='outline' placeholder='Your Website' type='text' />
        <br />
        <MyInput rightAddon={<Button onClick={() => setShow(prev => !prev)}  style={{ color: show ? 'green' : 'red' }}>{show ? 'hide' : 'show'}</Button>} variant='outline' placeholder='password' type={show ? 'text' : 'password'} />
    </>
  )
}

export default InputPage;