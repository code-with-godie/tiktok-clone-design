import React from 'react'
import styled from 'styled-components'
import Topnav from '../../components/nav/Topnav'
import Create from '../../components/upload/Create'
const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Content = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F8F8F8;
`
const Upload = () => {
  return (
    <Container>
        <Topnav/>
        <Content>
            <Create/>

        </Content>
    </Container>
  )
}

export default Upload