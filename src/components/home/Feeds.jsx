import React from 'react'
import styled from 'styled-components'
import VideosContainer from './VideosContainer'
const Container = styled.div`
    padding:.5rem;
    flex: 3;

`
const Feeds = () => {
  return (
    <Container>
      <VideosContainer/>
    </Container>
  )
}

export default Feeds