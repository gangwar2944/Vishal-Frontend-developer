import React, { useState } from "react";
import styled from "styled-components";
import { miniLaptop, tablate } from "../responsive";

const CartContainer = styled.div`
   /* padding: 20px; */
`;
const Cart = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;

`;
const CartHeader = styled.h2`
  padding: 5px;
  text-align: start;
`;
const CartDetails = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const InputContainer = styled.div`
  padding: 10px;
  margin: 5px;
  width: 48%;
  /* text-align: start; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  ${miniLaptop({width:"100%"})}
  
`;
const InputContainerChild = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Strong = styled.strong`
    text-align: start;
    margin-right:5px;
`
const CategoryItemViewPage = (props) => {
  const jsonData = props.data;
//   console.log("props dat : ", jsonData.missions);

  return (
    <CartContainer>
    <CartHeader>Capsule Details
      </CartHeader>
    <Cart>
      <CartDetails>
        <InputContainer>
          <Strong>Capsule Serial:</Strong> {jsonData.capsule_serial}
        </InputContainer>
        <InputContainer>
          <Strong>Capsule ID:</Strong> {jsonData.capsule_id}
        </InputContainer>
        <InputContainer>
          <Strong>Status:</Strong> {jsonData.status}
        </InputContainer>
        <InputContainer>
          <Strong>Original Launch:</Strong> {jsonData.original_launch}
        </InputContainer>
        {jsonData.missions.map((item, index) => (
          <InputContainer key={index}>
            <InputContainerChild>
              <Strong>Mission Name:</Strong> {item.name}
            </InputContainerChild>
            <InputContainerChild>
              <Strong>Flight:</Strong> {item.flight}
            </InputContainerChild>
          </InputContainer>
        ))}
        <InputContainer>
          <Strong>Landings:</Strong> {jsonData.landings}
        </InputContainer>
        <InputContainer>
          <Strong>Type:</Strong> {jsonData.type}
        </InputContainer>
        <InputContainer>
          <Strong>Details:</Strong> {jsonData.details}
        </InputContainer>
        <InputContainer>
          <Strong>Reuse Count:</Strong> {jsonData.reuse_count}
        </InputContainer>
      </CartDetails>
    </Cart>
    </CartContainer>
  );
};

export default CategoryItemViewPage;
