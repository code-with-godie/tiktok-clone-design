import { IconButton } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import emoji from '../../assets/emoji.svg';
const Container = styled.div`
padding:1rem;
display: flex;
justify-content: center;
align-items: center;
border-top: 1px solid #F1F1F2;
`
const InputContainer = styled.div`
display: flex;
flex: 1;
max-width: 500px;
align-items: center;
gap:.5rem;
background-color: #F1F1F2;
padding:.5rem;
border-radius:.5rem;
`
const Input = styled.input`
flex: 1;
font-size: 1rem;
font-family:'Poppins',sans-serif;
border:none;
background: transparent;
outline: none;

`
const Emoji = styled.img``
const ChatInput = () => {
  return (
    <Container>
        <InputContainer>
        <Input 
        placeholder='Send a message...'
        />
        <IconButton><Emoji src={emoji}/></IconButton>
        </InputContainer>
    </Container>
  )
}

export default ChatInput