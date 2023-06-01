import React from 'react'
import styled from 'styled-components'
import ProfileHeader from './ProfileHeader'
import UsersPosts from './UsersPosts'

const Container = styled.div`
  flex:4;
`
const UserProfile = ({userID}) => {
  return (
    <Container>
        <ProfileHeader>
        </ProfileHeader>
        <UsersPosts userID={userID} />

    </Container>
  )
}

export default UserProfile