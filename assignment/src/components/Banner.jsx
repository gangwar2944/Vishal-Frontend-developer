import React from "react";
import styled from "styled-components";
import { maxTablate, miniMobile, mobile, tablate } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 70px;
  ${miniMobile({height:"100%",flexWrap:"reverse"})}
  ${mobile({height:"100%",flexWrap:"reverse"})}
  ${tablate({height:"100%",flexWrap:"reverse"})}

`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  background-color: #fff;
  margin-top: 10px;
  /* margin-bottom: 10px; */
  
  display: flex;
  ${mobile({flexDirection:"column"})}
  ${tablate({flexDirection:"column"})}
`;
const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 50px;
  ${mobile({order: "1",padding:"10px"})}
  ${maxTablate({padding:"20px"})}
  ${tablate({order: "1",padding:"40px"})}

`;
const Heading = styled.h2``;
const Para = styled.p`
  font-size: 16px;
  text-align: justify;
  line-height: 1.5;
  color: #333;
  margin: 10px 0px;
  letter-spacing: 1px;
  ${tablate({ letterSpacing: "0px"})}
`;
const ImageContainer = styled.div`
     flex: 1;
     padding: 50px 50px 0 0;
     border-radius: 10px;
     margin-top: 20px 20px 0 0;
     ${mobile({padding:"10px"})}
     ${maxTablate({padding:"20px 20px 0  0"})}
     ${tablate({padding:"40px 40px 0 40px"})}
`;
const Img =styled.img`
    width: 100%;
    height: 100%;
    border: 5px 5px 0 0 solid grey;
    border-radius: 30px 30px 0 0;
    object-fit: cover;

`

const Banner = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <TextContainer>
            <Heading>Unleash the Future of Space Exploration</Heading>
            <Para>
               Our SpaceX product is built on the promise of 'Unleash the Future of Space Exploration.' We're dedicated to pushing the boundaries of human achievement in space technology, making the cosmos more accessible, and pioneering a new era of discovery, innovation, and possibility. Join us in reshaping the future of space exploration and unlocking the mysteries of the universe.
            </Para>
          </TextContainer>
          <ImageContainer>
            <Img src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="photo" />
          </ImageContainer>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Banner;
