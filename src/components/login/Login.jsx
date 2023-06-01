import { Close, QrCode } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import google from '../../assets/google.png'
import twitter from '../../assets/twitter.png'
import apple from '../../assets/apple.png'

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
        max-width: 500px; 
        border-radius: .5rem;
        max-height: 530px;
        
    }
`

const CloseContainer = styled.div`
display: flex;
flex-direction: column;
gap:.5rem;
padding:.5rem;
.icon-btn{
    background: #80808031;
    align-self: flex-end;
}
.icon{
    font-size: 1.7rem;
    color: #000000e4;
}
`
const InputContainer = styled.div`
flex: 1;
overflow: auto;
display: flex;
flex-direction: column;
gap:1rem;
padding:.5rem;
align-items: center;
`
const LinkContainer = styled.div`
padding:.5rem;
display: flex;
align-items: center;
padding: 1rem;
justify-content: center;
border-top: 1px solid #F1F1F2;
.link{
    text-decoration: none;
    color: #FE496C;
    font-weight: 600;
}
`
const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    color: #000000d1;
`
const LinkText = styled.p`
color: #808080ac;
`
const Input = styled.div`
    display: flex;
    align-items: center;
    gap:.5rem;
    width: 100%;
  border: 1px solid #F1F1F2;
    max-width: 350px;
    padding:.5rem;
`
const Description = styled.p`
    flex: 1;
    text-align: center;
`
const Logo = styled.img`
width: ${props => props.large ? '50px':'30px'};
height: auto;
object-fit: contain;
`
const Login = ({closeModel}) => {
  return (
    <Container>
        <CloseContainer>
            <IconButton className='icon-btn' onClick={e => closeModel(false) } ><Close className='icon' /></IconButton>
            <Title>Login into TikTok</Title>
        </CloseContainer>
        <InputContainer>
        <Input> <QrCode/> <Description>Use QR code</Description> </Input>
        <Input> <QrCode/> <Description>use phone/email/username</Description> </Input>
        <Input> <QrCode/> <Description>Continue with Facebook</Description> </Input>
        <Input> <Logo src={google} large /> <Description>Continue with Google</Description> </Input>
        <Input> <Logo src={twitter} /> <Description>Continue with Twitter</Description> </Input>
        <Input> <Logo src={apple} /> <Description>Continue with Apple</Description> </Input>
        <Input> <QrCode/> <Description>Use QR code</Description> </Input>
        </InputContainer>
        <LinkContainer>
        <LinkText>Dont have an account?</LinkText>
        </LinkContainer>

    </Container>
  )
}

export default Login