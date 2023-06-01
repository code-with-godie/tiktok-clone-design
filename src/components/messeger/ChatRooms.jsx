import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Settings } from '@mui/icons-material'
import Room from './Room'
import person1 from '../../assets/person/1.jpeg'
import person2 from '../../assets/person/2.jpeg'
import MessegerSettings from './MessegerSettings'
import Model from '../../components/models/Model'
const Container = styled.div`
    height: 90%;
    /* box-shadow:0 0 5px 5px rgba(215, 215, 215, 0.3) ; */
    border-radius:.5rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap:.5rem;
    overflow: auto;
    @media screen and (min-width: 768px) {
        flex: 1;
        max-width: 400px;
    }


` 
const HeaderContainer = styled.div`
display: none;
padding:.5rem;
@media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .icon{
        color: black;
        font-size: 1.7rem;
    }
`
const RoomsContainer = styled.div`
display: flex;
flex-direction: column;
gap:.5rem;
overflow: auto;
flex: 1;
`
const Title = styled.h2``
const ChatRooms = ({setCurrentConversation}) => {
    const [showSetting,setShowSetting] = useState(false);
  return (
    <Container>
        <HeaderContainer>
            <Title>Messages</Title>
        <IconButton onClick={e => setShowSetting(true)} className='icon' ><Settings/></IconButton>
        </HeaderContainer>
        <RoomsContainer>
            <Room setCurrentConversation={setCurrentConversation} username='Nisee..254' date='6:00pm' messege='you are up?'  profile={person1} />
            <Room setCurrentConversation={setCurrentConversation} username='poly sonie' date='1:00pm' messege='hey how are you' profile={person2} />            
        </RoomsContainer>
        {
            showSetting && 
            <Model center  bg='rgba(0, 0, 0, 0.17)' >
                <MessegerSettings close = {setShowSetting} />
            </Model>
        }
    </Container>
  )
}

export default ChatRooms