import React, { useState } from 'react'
import { Avatar, IconButton } from '@mui/material'
import { Home } from '@mui/icons-material'
import {BsPeople} from 'react-icons/bs'
import {BiVideo} from 'react-icons/bi'
import {MdOutlineExplore} from 'react-icons/md'
import styled from 'styled-components'
import Model from '../models/Model'
import Login from '../login/Login'
const Container = styled.div`
    border-right: 1px solid #F1F1F2;
    display: flex;
    overflow: auto;
    flex-direction: column;
    @media screen and (min-width: 1200px) {
        flex: 1;
        border-right:none;
    }

`
const NavContainer  = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
border-bottom: 1px solid #e8e8e8;

`
const NavItem  = styled.div`
display: flex;
align-items: center;
gap:.5rem;
cursor: pointer;
.icon{
    font-size: 2rem;
    transition: 300ms ;
    color: black;
}
.active{
    color: #FE496C;
    font-size: 2.1rem;
}
:hover{
    background-color:#F1F1F2 ;
}
`
const NavLabel = styled.h2`
display: none;
font-size: 1.3rem;
text-transform: capitalize;
     @media screen and (min-width: 768px){
        display: inline;
     }
`
const FollowingContainer  = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
/* gap:.2rem; */
overflow: auto;
flex:1;
.profile{
    width: 35px;
    height: 35px;
}
`
const Sidenav = () => {
    const [login,setLoging] = useState(false)
  return (
    <Container>
        <NavContainer>
            <NavItem> 
                <IconButton> <Home className='icon active ' /> </IconButton> 
                <NavLabel>for you</NavLabel>
             </NavItem>
            <NavItem> 
                <IconButton className='icon '> <BsPeople  /> </IconButton> 
                <NavLabel  >following</NavLabel>
             </NavItem>
            <NavItem> 
                <IconButton> <MdOutlineExplore className='icon ' /> </IconButton> 
                <NavLabel>explore</NavLabel>
             </NavItem>
            <NavItem> 
                <IconButton> <BiVideo className='icon' /> </IconButton> 
                <NavLabel>live</NavLabel>
             </NavItem>
        </NavContainer>
        <FollowingContainer>
            <IconButton><Avatar className='profile'/></IconButton>
            <IconButton><Avatar className='profile'/></IconButton>
            <IconButton><Avatar className='profile'/></IconButton>
            <IconButton><Avatar className='profile'/></IconButton>
            <IconButton><Avatar className='profile'/></IconButton>
            <IconButton><Avatar className='profile'/></IconButton>
        </FollowingContainer>
        {login &&<Model bg=' rgba(0,0,0,.3)'  center ><Login/> </Model> }
    </Container>
  )
}

export default Sidenav