import React from 'react'
import styled from 'styled-components'
import ChatHeader from './ChatHeader'
import ChatList from './ChatList'
import ChatInput from './ChatInput'

const Container = styled.div`
    height:100%;
    display: flex;
    flex-direction: column;
`
const Chats = ({currentConversation:{profile,username}}) => {
  return (
    <Container>
        <ChatHeader username={username} profile={profile} />
        <ChatList/>
        <ChatInput/>
    </Container>
  )
}

export default Chats