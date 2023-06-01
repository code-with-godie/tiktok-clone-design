import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.main`
  height: 100vh;
`
const Protected = () => {
    const user = true;
  return (
    <Container>
        {
            user ? <Outlet/> : null
        }
    </Container>
  )
}

export default Protected