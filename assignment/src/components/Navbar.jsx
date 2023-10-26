import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
     width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: #fff;
`
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  background-color: #fff;
`;
const Logo= styled.div`
    width: 100px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    /* size: 20px; */
`

const Navbar = () => {
  return (
    <div>
        <Container>
            <Wrapper>
              <Logo><Img src='https://logowik.com/content/uploads/images/314_spacex.jpg'/></Logo>
            </Wrapper>
            
       </Container>
    </div>
  )
}

export default Navbar