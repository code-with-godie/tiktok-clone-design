import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
padding:1rem;
display: flex;
gap:.5rem;
border-bottom: 1px solid #F1F1F2;
`
const ProfileDescription = styled.div`
display: flex;
flex-direction: column;
gap:.3rem;
`
const Username = styled.h3`
font-size:1rem;
color: #000000d4;
`
const LastMessage = styled.p`
font-size:.9rem;
color: #000000b0;
font-family: 'Poppins',sans-serif;
`
const ChatHeader = ({username,profile}) => {
  return (
    <Container>
        <IconButton> <Avatar src={profile}/> </IconButton>
        <ProfileDescription>
        <Username> {username} </Username>
        <LastMessage> {`@ ${username}`} </LastMessage>
        </ProfileDescription>
    </Container>
  )
}

export default ChatHeader