import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { users } from '../../data/data'
import Button from '../styled/Button'
import {BsMusicNote} from 'react-icons/bs'
import VideoPlayer from './VideoPlayer'
import {Link, useNavigate, useNavigation} from 'react-router-dom'

const Container = styled.div`
    display: flex;
    gap:.5rem;
`
const Left = styled.div`
display: flex;
gap:.5rem;
flex: 1;
.profile{
    cursor: pointer;
}
`
const Right = styled.div``
const DescriptionContainer = styled.div`
display: flex;
flex-direction: column;
gap:.5rem;
`
const UserInfo = styled.div`
display: flex;
gap:.5rem;
align-items: center;
`
const UserName = styled.h3`
    cursor: pointer;
    :hover{
        text-decoration: underline;
    }
`
const Name = styled.p`
font-family:'Poppins',sans-serif;
font-size:.9rem;
`
const Caption = styled.p`
font-family:'Poppins',sans-serif;
`
const PostHeader = ({userID,caption,url}) => {
    const user = users.find(user => user._id === userID);
    const navigate = useNavigate()
    const handleNavigation =()=>{
        navigate(`/profile/@${user?.username}`,{state:{userID:user?._id}})
    }
  return (
    <Container>
        <Left>
            <Avatar className='profile' alt={user?.username} src={user?.profilePic} />
            <DescriptionContainer>
                <UserInfo>
                    <UserName onClick={handleNavigation} > {user?.username} </UserName>
                <Name> {user?.name} </Name>
                </UserInfo>
                <Caption> {caption.length > 105 ? `${caption.substring(0,105)}...`: caption } </Caption>
                <VideoPlayer url={url} />
            </DescriptionContainer>
          
        </Left>
        <Right>
            <Button border='1px solid #FE496C' color='#FE496C' >Follow</Button>
        </Right>


    </Container>
  )
}

export default PostHeader