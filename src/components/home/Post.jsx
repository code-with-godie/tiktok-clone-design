import React from 'react'
import styled from 'styled-components'
import PostHeader from './PostHeader'
import VideoPlayer from './VideoPlayer'

const Container = styled.div`
    padding: 1rem;
    border-bottom: 1px solid #F1F1F2;
    display: flex;
    flex-direction: column;

`
const Post = ({user:userID,caption,url}) => {
  return (
    <Container>
        <PostHeader userID={userID} caption={caption} url={url} />
    </Container>
  )
}

export default Post