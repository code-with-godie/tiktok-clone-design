import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: .5rem;
    cursor: pointer;
    padding:.5rem;
    :hover{
        background-color: #f8f8f8;
    }
`
const DescriptionContainer = styled.div`
    display: none;
    @media screen and (min-width: 768px){
        display: flex;
        flex: 1;
        gap:.3rem;
        flex-direction: column;

    }
`
const Description = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
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
const Time = styled(LastMessage)``
const Room = ({username,date,messege,profile,setCurrentConversation}) => {
  return (
    <Container  onClick={e=> setCurrentConversation({profile,username})} >
        <IconButton><Avatar src={profile} /></IconButton>
        <DescriptionContainer>
            <Username> {username} </Username>
            <Description>
                <LastMessage> {messege} </LastMessage>
                <Time> {date} </Time>
            </Description>
        </DescriptionContainer>
    </Container>
  )
}

export default Room