import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import CategoryItemViewPage from "./CategoryItemViewPage";
import { miniLaptop, miniMobile, mobile, tablate} from "../responsive";
const Cart = styled.div`
  padding: 25px;
  border-radius: 5px;
  width: 210px;
  background-color: #fff;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
  ${miniLaptop({width: "210px",padding: "15px"})}
  ${mobile({width:"160px",padding:"10px",margin:"4px"})}
  ${miniMobile({width:"140px",padding:"8px",margin:"4px"})}

`;
const CartDetails = styled.div`
`;
const DetailContainer = styled.p`
  display: flex;
  margin: 5px 0;
  flex-direction: column;
  justify-content: flex-start;
  margin: 8px 0;
`;
const Key = styled.p`
  flex: 1;
  font-size: 12px;
  margin-bottom: 5px;
`;
const Para = styled.p`
  flex: 1;
  font-size: 14px;
  color: #a29e9e;

`;
const CategoryItem = (props) => {
  const jsonData = props.data;
  //   console.log("props dat : ", jsonData.missions);

  const [isEditProductPage, setIsEditProductPage] = useState(false);

  const openEditProductpage = (item) => {
    setIsEditProductPage(true);
    document.body.classList.add("body-scroll-lock");
  };

  const closeEditProductModal = () => {
    setIsEditProductPage(false);
    document.body.classList.remove("body-scroll-lock");
  };
  return (
    <>
    <Cart onClick={openEditProductpage} >
      <CartDetails>
        <DetailContainer>
          <Key>Capsule Serial</Key> <Para>{jsonData.capsule_serial}</Para>
        </DetailContainer>
        <DetailContainer>
          <Key>Status</Key> <Para>{jsonData.status}</Para>
        </DetailContainer>
        <DetailContainer>
          <Key>Original Launch</Key>
          <Para>
            {" "}
            {jsonData.original_launch !== null
              ? jsonData.original_launch
              : "NA"}
          </Para>
        </DetailContainer>
        <DetailContainer>
          <Key>Type</Key> <Para>{jsonData.type}</Para>
        </DetailContainer>
      </CartDetails>
    </Cart>
     <Modal isOpen={isEditProductPage} onClose={closeEditProductModal}>
     <CategoryItemViewPage
       data={jsonData}
       onClose={closeEditProductModal}
     />
   </Modal>
   </>
  );
};

export default CategoryItem;
