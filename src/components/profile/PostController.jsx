import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {AiTwotoneLock} from 'react-icons/ai'

const Container = styled.div`
    border-bottom: 1px solid #F1F1F2;
    display: flex;
    align-items: flex-end;
    gap:.5rem;
    
`
const Control = styled.div`
    display: flex;
    align-items: flex-end;
    gap:.2rem;
    width: 100px;
    height: 40px;
    padding:.5rem;
    cursor: pointer;
    .icon{
        font-size: 1.7rem;
        color: gray;
    }
    &.active{
        border-bottom: 2px solid black;
        p{
            color: #000000e2;
        }
    }
    &:hover{
        background-color: #F1F1F2;
    }


`
const ControlText = styled.p`
    color: #a2a2a2e1;
    text-transform: capitalize;
    font-weight:600;
    font-size: 1.2rem;
`
const PostController = () => {
    const [index,setIndex] = useState(0);

    useEffect(()=>{
        const controls = document.querySelectorAll('.control');
        controls.forEach((control,controlIndex) =>{
            control.classList.remove('active');
            if(index === controlIndex){
                control.classList.add('active')
            }
            control.addEventListener('click',e =>{
                setIndex(controlIndex);
            })
            
        })
    },[index])
    useEffect(()=>{

    },[index])
  return (
    <Container>
        <Control className='control' >
            <ControlText>videos</ControlText>
        </Control>
        <Control  className='control' >
            <AiTwotoneLock className='icon' />
            <ControlText>liked</ControlText>
        </Control>
    </Container>
  )
}

export default PostController