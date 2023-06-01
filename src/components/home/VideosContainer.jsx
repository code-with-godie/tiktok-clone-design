import React from 'react'
import styled from 'styled-components'
import {posts} from '../../data/data'
import Post from './Post'
const Container = styled.div`
    width: 100%;
    max-width: 700px;
    scroll-snap-type:mandatory;
    overflow: auto;
    height: 100%;
    ::-webkit-scrollbar {
      width: 0;
    }
`
const VideosContainer = () => {
  return (
    <Container>
        {
            posts.map(post => <Post key={post.id} {...post} /> )
        }
    </Container>
  )
}

export default VideosContainer