import { IconButton } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import {MdFavorite} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'
import {BsBookmarkFill, BsPause, BsVolumeMute, BsVolumeUp,BsFillPlayFill} from 'react-icons/bs'
import {IoIosShareAlt} from 'react-icons/io'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    scroll-snap-align:top;

`
const Top = styled.div``
const Bottom = styled.div`
width: 100%;
max-width: 400px;
display: flex;

`
const VideoContainer = styled.div`
flex: 1;
border-radius:.5rem;
position: relative;
&.paused .play{
    display: inline;

}
&:not(.paused) .pause{
    display: inline;

}
&.muted .mute{
    display: inline;

}
&:not(.muted) .unmute{
    display: inline;

}
`
const VideoControls = styled.div`
display: flex;
padding:.5rem;
flex-direction: column;
gap: 1rem;
justify-content: flex-end;
.icon{
    font-size: 1.5rem;
    color: black;
    background-color: #ededed;
}
`
const Control = styled.div`
display: flex;
flex-direction: column;
gap: .3rem;
justify-content: center;
align-items: center;
`
const ControlLabel = styled.p``
const Video = styled.video`
max-width: 100%;
height: 100%;
max-height: 600px;
object-fit: contain;
border-radius:.5rem;
cursor: pointer;
`
const OverLay = styled.div`
position: absolute;
bottom:.5rem;
width: 100%;
padding: .5rem;
z-index: 10;
`
const OverlayTop = styled.div`
display: flex;
justify-content: space-between;
padding:.5rem;
.icon-btn{
    font-size:1.7rem;
    color:white;
    position: relative;
}
.icon{
    position: absolute;
    display: none;
}
`
const OverlayBottom = styled.div``
const VideoPlayer = ({url}) => {
    const videoRef = useRef(null);
    const videoContainerRef = useRef(null);
    const playBtnRef = useRef(null);
    const muteBtnRef = useRef(null);
    const togglePlay = video =>{
        if(video.paused){
            video.play();
        }
        // if(!video.paused){
        //     video.pause();
        // }

        // video.play();
    }
    const toggleVolume = video =>{
        if(!video.muted){
            video.volume = 0;
        }
    }
    useEffect(()=>{
        const videoContainer = videoContainerRef.current;
        const video = videoRef.current;
        const playBtn = playBtnRef.current;
        const muteBtn = muteBtnRef.current;

        videoContainer.classList.add('paused');

        //play/pause
        playBtn.addEventListener('click',e => togglePlay(video))
        video.addEventListener('click',e => togglePlay(video));
        videoContainer.addEventListener('keypress',e =>{
            switch(e.key){
                case 'p':
                    togglePlay(video);
                    break;
                 default:
                    break;
            }
        })
        video.addEventListener('play',e =>{
            videoContainer.classList.remove('paused');
        })
        video.addEventListener('paused',e =>{
            videoContainer.classList.add('paused');
        })

        //mute/unmute
        muteBtn.addEventListener('click',e => toggleVolume(video));
        video.addEventListener('volumechange',e =>{
            if(video.volume === 0){
                videoContainer.classList.add('muted');
            }else{
                videoContainer.classList.remove('muted');
                
            }
        });
    },[])
  return (
    <Container>
        <Top>
            <p>original sound</p>
        </Top>
        <Bottom>
            <VideoContainer className='container' ref={videoContainerRef} >
                <Video loop src={url} ref={videoRef} />
                <OverLay   >
                    <OverlayTop  >
                    <IconButton className='icon-btn' ref={playBtnRef} >
                        <BsPause className='icon pause'/>
                        <BsFillPlayFill className='icon play'/>
                    </IconButton>
                    <IconButton className='icon-btn' ref={muteBtnRef} >
                        <BsVolumeMute className='icon mute'/>
                        <BsVolumeUp className='icon unmute'/>
                    </IconButton>
                    </OverlayTop>
                    <OverlayBottom>

                    </OverlayBottom>

                </OverLay>
            </VideoContainer>
            <VideoControls>
                <Control>
                    <IconButton className='icon' > <MdFavorite/> </IconButton>
                    <ControlLabel>23k</ControlLabel>
                </Control>
                <Control>
                    <IconButton className='icon' > <AiFillMessage/> </IconButton>
                    <ControlLabel>23k</ControlLabel>
                </Control>
                <Control>
                    <IconButton className='icon' > <BsBookmarkFill/> </IconButton>
                    <ControlLabel>23k</ControlLabel>
                </Control>
                <Control>
                    <IconButton className='icon' > <IoIosShareAlt/> </IconButton>
                    <ControlLabel>23k</ControlLabel>
                </Control>
            </VideoControls>
        </Bottom>

    </Container>
  )
}

export default VideoPlayer