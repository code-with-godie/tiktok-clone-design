import React from 'react'
import styled from 'styled-components'
const Container = styled.button`
padding:.5rem 1rem;
display: flex;
align-items: center;
gap:.5rem;
justify-content: center;
border: none;
background: ${props => props.bg ||  'transparent'};
outline: none;
border:${props => props.border };
height: 35px;
color: ${props => props.color || '#000000b7' };
font-weight: 600;
font-size: 1rem;
cursor: pointer;
&.large{
padding:.5rem 2rem;

}
`
const Button = ({children,border,bg,color,handleclick,large}) => {
  return (
    <Container border={border} bg={bg} color={color} onClick={handleclick} className={large && 'large'} >
        {children}
    </Container>
  )
}

export default Button
