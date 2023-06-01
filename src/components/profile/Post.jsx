import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { IconButton } from '@mui/material'
import {CiPause1, CiPlay1} from 'react-icons/ci'
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
const Post = ({id,url,caption}) => {
    const [paused,setPaused] = useState(true);
    const videoRef= useRef(null);
    const playBtnRef= useRef(null);
    const togglePlay = video=>{
        if(paused){
            video.play();
        }else{
            video.pause();
        }
    }
    useEffect(()=>{
        const video = videoRef.current;
        const playBtn = playBtnRef.current;
        setPaused(video.paused);
        playBtn.addEventListener("click",e => togglePlay(video) )
        video.addEventListener("play",e => setPaused(false) )
        video.addEventListener("pause",e => setPaused(true) )
    },[])
    console.log(paused);
  return (
    <PostContainer>
                <Video src={url} ref={videoRef} loop />
                {/* <VideoWrapper>
                </VideoWrapper> */}
                <Caption> {caption?.length > 25 ? `${caption?.substring(0,25)}...` :caption} </Caption>
                <Overlay>
                    <IconButton  ref={playBtnRef} className='icon' > {paused ? <CiPlay1/> : <CiPause1/>} </IconButton>
                    <p>17k</p>
                </Overlay>
            </PostContainer>
  )
}

export default Post