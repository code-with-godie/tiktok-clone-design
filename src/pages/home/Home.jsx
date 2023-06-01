import React from 'react'
import styled from 'styled-components'
import Topnav from '../../components/nav/Topnav'
import Sidenav from '../../components/nav/Sidenav'
import Feeds from '../../components/home/Feeds'
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
const Home = () => {
  return (
    <Container>
      <Topnav/>
      <Content>
        <Sidenav/>
        <Feeds/>

      </Content>
    </Container>
  )
}

export default Home