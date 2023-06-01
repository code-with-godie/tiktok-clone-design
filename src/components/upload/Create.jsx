import React from 'react'
import styled from 'styled-components'
import Dropzone from 'react-dropzone'
const Container = styled.div`
    width: 80%;
    max-width: 1024px;
    height: 90%;
    background-color: white;
    border-radius:.5rem;
    box-shadow:0 0 5px 5px rgba(224, 224, 224, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    .dropzone{
        background: red;
    }
`
const DropContainer = styled.div`
    width: 90%;
    height: 90%;
    border: 1px dashed gray;
    cursor: pointer;
    :hover{
        background-color: #f3f3f3;
    }
`
const Create = () => {
    const handleDrop = (files,rejected)=>{
        console.log(files);
    }
  return (
    <Container>
        <DropContainer>

        <Dropzone className='dropzone' onDrop={handleDrop}  >
            {props =>{
                return(
                    <h1>drop file here</h1>
                    )
                }}
        </Dropzone>
                </DropContainer>
    </Container>
  )
}

export default Create