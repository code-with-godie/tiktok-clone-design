import React from 'react'
import styled from 'styled-components'
import PostController from './PostController'
import Posts from './Posts'

 const Container = styled.div`
    
 `
const UsersPosts = ({userID}) => {
  return (
    <Container>
        <PostController/>
        <Posts userID= {userID} />
    </Container>
  )
}

export default UsersPosts