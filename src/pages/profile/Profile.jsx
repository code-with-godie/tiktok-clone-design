import React from 'react'
import styled from 'styled-components'
import Topnav from '../../components/nav/Topnav'
import Sidenav from '../../components/nav/Sidenav'
import { useLocation } from 'react-router-dom'
import UserProfile from '../../components/profile/UserProfile'
const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Content = styled.section`
  flex: 1;
  display: flex;
  overflow: auto;
`
const Profile = () => {
    const location = useLocation();
    const {userID} = location.state;
  return (
    <Container>
        <Topnav/>
        <Content>
            <Sidenav/>
            <UserProfile userID={userID} />
        </Content>
    </Container>
  )
}

export default Profile