import React, { useState } from "react";
import styled from "styled-components";
import { miniLaptop, mobile, tablate } from "../responsive";

const CartContainer = styled.div`
  /* padding: 20px; */
`;
const Cart = styled.div`
  /* border: 1px solid #ccc; */
  border-radius: 5px;
  width: 100%;
`;
const CartHeader = styled.h2`
  padding: 5px;
  text-align: start;
  border-bottom: 1px solid #aa9f9f;
`;
const CartDetails = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  justify-content: flex-start;
  align-items: center;
`;
const DetailContainer = styled.p`
  width: 50%;
  display: flex;
  margin: 5px 0;
  /* flex-direction: column; */
  justify-content: space-between;
  margin: 8px 0;
  ${miniLaptop({ width: "100%" })}
`;
const MissionsContainer = styled.div`
  width: 100%;
  display: flex;
`;
const MissionHeading = styled.div`
     width: 100%;
    display: flex;
    justify-content: flex-start;
    /* background-color: #e2dede; */
    padding: 8px 8px 8px 0;
    font-size: large;
    font-weight: 700;
`;

const Key = styled.p`
  flex: 1;
  color: #a29e9e;
  font-size: 14px;
  margin-bottom: 5px;
  text-align: start;
`;
const Para = styled.p`
  flex: 1;
  font-size: 14px;
  text-align: start;
`;
const StyledTable = styled.table`
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
  border: none;
`;

const StyledHeader = styled.th`
  padding: 8px;
  text-align: left;
  background-color: rgba(0,0,0,0);
  color: #fff;
  border: none;
`;

const StyledRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f2f2f2;
  }

  &:nth-child(even) {
    background-color: #ddd;
  }
`;

const StyledCell = styled.td`
  /* border: 1px solid #908d8d; */
  padding: 8px;
  text-align: left;
`;
const CategoryItemViewPage = (props) => {
  const jsonData = props.data;
  //   console.log("props dat : ", jsonData.missions);

  return (
    <CartContainer>
      <CartHeader>Capsule Details</CartHeader>
      <Cart>
        <CartDetails>
          <DetailContainer>
            <Key>Capsule Serial</Key> <Para>{jsonData.capsule_serial}</Para>
          </DetailContainer>
          <DetailContainer>
            <Key>Capsule ID</Key> <Para>{jsonData.capsule_id}</Para>
          </DetailContainer>
          <DetailContainer>
            <Key>Status</Key> <Para>{jsonData.status}</Para>
          </DetailContainer>
          <DetailContainer>
            <Key>Original Launch</Key>
            <Para>
              {jsonData.original_launch !== null
                ? jsonData.original_launch
                : "NA"}
            </Para>
          </DetailContainer>
          <DetailContainer>
            <Key>Landings</Key> <Para>{jsonData.landings}</Para>
          </DetailContainer>
          <DetailContainer>
            <Key>Type</Key> <Para>{jsonData.type}</Para>
          </DetailContainer>
          <DetailContainer>
            <Key>Reuse Count</Key> <Para>{jsonData.reuse_count}</Para>
          </DetailContainer>
          <DetailContainer>
            <Key>Details</Key>
            <Para>
              {jsonData.details !== null
                ? jsonData.details
                : "NA"}
            </Para>
          </DetailContainer>
          <MissionHeading>Missions</MissionHeading>
          {jsonData.missions.length !== 0 ? (
            <StyledTable>
              <thead>
                <tr>
                  <StyledHeader>Name</StyledHeader>
                  <StyledHeader>Flight</StyledHeader>
                </tr>
              </thead>
              <tbody>
                {jsonData.missions.map((item, index) => (
                  <StyledRow key={index}>
                    <StyledCell>{item.name}</StyledCell>
                    <StyledCell>{item.flight}</StyledCell>
                  </StyledRow>
                ))}
              </tbody>
            </StyledTable>
          ) : (
            <Key
              style={{
                textAlign: "center",
                margin: "5px",
                backgroudColor: "#ddd",
              }}
            >
              No data available
            </Key>
          )}
        </CartDetails>
      </Cart>
    </CartContainer>
  );
};

export default CategoryItemViewPage;
