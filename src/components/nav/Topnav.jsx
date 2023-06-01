import React, { useState } from 'react'
import styled from 'styled-components'
import { Avatar, IconButton, Tooltip } from '@mui/material'
import { Add, MoreVert, Search } from '@mui/icons-material'
import Button from '../styled/Button'
import logo from '../../assets/logo.png'
import logo2 from '../../assets/logo2.png'
import {Link} from 'react-router-dom'
import Model from '../models/Model'
import Login from '../login/Login'
import { useAppContext } from '../../context/AppContext'
import { BsFillSendFill } from 'react-icons/bs'
import { BiMessageAltMinus } from 'react-icons/bi'
const Container = styled.div`
    display: flex;
    align-items: center;
    padding:.5rem;
    border-bottom: 1px solid #F1F1F2;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
        gap:.5rem;
    }
`
const LogoContainer = styled.div`
`
const SearchContainer = styled.div`
display: none;
@media screen and (min-width: 768px) {
flex: 1;
display: flex;
align-items: center;
justify-content: center;
}

`
const ControlContainer = styled.div`
display: flex;
gap: .5rem;
align-items: center;
@media screen and (min-width: 768px) {
    gap: 1rem;
}
.icon{
    font-size: 1.7rem;
    color: #000000d8;
}
.profile{
    cursor: pointer;
}
.link{
    text-decoration: none;
    color: inherit;
}
`
const Logo = styled.img`
max-width: 100px;
height: auto;
`
const InputContainer = styled.div`
flex: 1;
max-width: 500px;
background-color: #e5e5e5 ;
display: flex;
border-radius:1rem;
padding: 0.5rem;
.icon{
    padding: 0.5rem;
    color: #808080ce;
    font-size: 2rem;
}
`
const Input = styled.input`
flex: 1;
border: none;
background: transparent;
outline: none;
border-right:1px solid black;
font-weight: 600;
font-family:'Poppins',sans-serif !important;
::placeholder{
    
    color: gray;
}
`
const Topnav = () => {
    const [login,setLogin] = useState(false);
    const {user} = useAppContext();

  return (
    <Container>
        <LogoContainer>
            <Link to='/'  > <Logo src={logo2} /> </Link>
        </LogoContainer>
        <SearchContainer>
            <InputContainer>
            <Input 
            placeholder='Seach...'
            />
            {/* <IconButton> */}
                <Search className='icon' />
            {/* </IconButton> */}
            </InputContainer>
           
        </SearchContainer>
        <ControlContainer>
            <Link className='link' to='/upload' >
            <Button border='1px solid #d4d4d5' > <Add/> Upload </Button>
            </Link>
            {
                user ? 
                <>
                <Link to='/inbox' >
                <Tooltip title='inbox' arrow >
                <IconButton><BsFillSendFill className='icon' /></IconButton>
                </Tooltip>
                </Link>
                <Link>
                <Tooltip  title='notifications' arrow >
                <IconButton><BiMessageAltMinus className='icon' /></IconButton>
                </Tooltip>
                </Link>
                <Tooltip title='profile' arrow >
                <Avatar src={user?.profilePic} alt={user?.username} className='profile' />
                </Tooltip>
                </>:
                <>
                <Button bg='#FE496C' color='white' handleclick={()=> setLogin(true)} >Login in</Button>
                <IconButton>  <MoreVert/> </IconButton>
                </>
            }
        </ControlContainer>
        {login &&<Model bg=' rgba(0,0,0,.3)'  center ><Login  closeModel={setLogin} /> </Model> }

    </Container>
  )
}

export default Topnav