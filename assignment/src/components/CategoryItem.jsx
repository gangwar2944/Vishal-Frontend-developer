import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import CategoryItemViewPage from "./CategoryItemViewPage";

const Cart = styled.div`
  /* border: 1px solid #ccc; */
  padding: 25px;
  border-radius: 5px;
  width: 300px;
  background-color: #fff;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const CartHeader = styled.div`
  background-color: #0055FB;
  color: white;
  padding: 5px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
`;
const CartDetails = styled.div`
  padding: 10px;
`;
const Para= styled.p`
    display: flex;
    margin: 5px 0;
    /* justify-content: space-between; */
`
const Strong= styled.strong`
    flex: 1;
`
const Para2= styled.p`
    flex: 1;
    margin-left: 5px;
`
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
    <Cart>
      <CartHeader onClick={openEditProductpage} className="addBtn">
        View Capsule Details
      </CartHeader>
      <Modal isOpen={isEditProductPage} onClose={closeEditProductModal}>
        <CategoryItemViewPage data={jsonData} onClose={closeEditProductModal} />
      </Modal>

      <CartDetails>
        <Para>
          <Strong>Capsule Serial:</Strong> <Para2>{jsonData.capsule_serial}</Para2>
        </Para>
        <Para>
          <Strong>Capsule ID:</Strong> <Para2>{jsonData.capsule_id}</Para2>
        </Para>
        <Para>
          <Strong>Status:</Strong> <Para2>{jsonData.status}</Para2>
        </Para>
        <Para>
          <Strong>Original Launch:</Strong> <Para2>{jsonData.original_launch?.substring(0,19)}</Para2>
        </Para>
        {/* <Para2>{jsonData.missions.map((item, index) => (
          <div key={index} style={{backgroundColor:"#fff"}}>
            <Para>
              <Strong>Mission Name:</Strong> <Para2>{item.name}</Para2>
            </Para>
            <Para>
              <Strong>Flight:</Strong> <Para2>{item.flight}</Para2>
            </Para>
          </div>
        ))}
        </Para2> */}
        <Para>
          <Strong>Landings:</Strong> <Para2>{jsonData.landings}</Para2>
        </Para>
        <Para>
          <Strong>Type:</Strong> <Para2>{jsonData.type}</Para2>
        </Para>
        <Para>
          <Strong>Reuse Count:</Strong> <Para2>{jsonData.reuse_count}</Para2>
        </Para>
      </CartDetails>
    </Cart>
  );
};

export default CategoryItem;
