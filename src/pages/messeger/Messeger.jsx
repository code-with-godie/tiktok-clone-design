import React, { useState } from 'react'
import styled from 'styled-components'
import Topnav from '../../components/nav/Topnav'
import ChatRooms from '../../components/messeger/ChatRooms'
import Conversation from '../../components/messeger/Conversation'
const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Content = styled.section`
  flex: 1;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  background-color: #F8F8F8;
  overflow: auto;
  padding:.5rem;
`
const Messeger = () => {
    const [currentConversation,setCurrentConversation] = useState(null);
  return (
    <Container>
        <Topnav/>
        <Content>
            <ChatRooms setCurrentConversation={setCurrentConversation} />
            <Conversation currentConversation ={currentConversation} />
        </Content>
    </Container>
  )
}

export default Messeger