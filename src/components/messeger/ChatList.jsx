import React, { useState } from 'react'
import styled from 'styled-components'
import {messeges} from '../../data/data';
import Message from './Message';
const Container = styled.div`
flex: 1;
overflow: auto;
`
const ChatList = () => {
    const [chats,setChats] = useState(messeges);
  return (
    <Container>
        {
        chats.map(message => <Message key={message._id} {...message} />)
        }
    </Container>
  )
}

export default ChatList