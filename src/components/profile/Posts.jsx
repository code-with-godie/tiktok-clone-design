import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {posts} from '../../data/data'

import Post from './Post'
const Container = styled.div`
display: grid;
grid-template-columns:repeat(auto-fill,minmax(150px,1fr));
grid-auto-rows:250px;
gap:.5rem;
padding:.5rem;
@media screen and (min-width: 768px) {
    grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
    grid-auto-rows:300px;
    
}
`
const PostContainer = styled.div`
cursor: pointer;
display: flex;
flex-direction: column;
position: relative;
`
const Video = styled.video`
width: 100%;
height: 100%;
object-fit: cover;
max-height: 100%;

`
const VideoWrapper = styled.div`
    background-color: black;
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Overlay = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding:.5rem;
    display: flex;
    align-items: center;
    color: white;
    .icon{
        color: white;
        
    }

`
const Caption = styled.p`
padding:.5rem;
font-family:'Poppins',sans-serif;
color: #696969d0;
`
const Posts = ({userID}) => {
    const videos = posts.filter(post => post.user === userID);
    const [play,setPlay] = useState(false);

  return (
    <Container>
        {
            videos.map(post =><Post key={post.id} {...post} />)
        }
    </Container>
  )
}

export default Posts