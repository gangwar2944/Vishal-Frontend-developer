import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import CategoryItem from "./CategoryItem";
import { getAPIData } from "../services/category-service";
import { mobile, tablate } from "../responsive";

const Container = styled.div`
  width: 100%;
  margin: 20px 0;
`;
const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  background-color: #ffffff;
  height: auto;
`;
const SearchSection = styled.div`
   padding:20px;
`;
const Heading = styled.h2`
  margin: 10px;
  font-size: 30px;

`;
const FormContainer = styled.div`
  width: 100%;
  margin: auto;
  ${tablate({ width: "100%" })}
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Label = styled.div`
  width: 24%;
  margin: auto;
  padding: 10px;
  
  ${tablate({ width: "40%" })}
  ${mobile({ width: "100%" })}
  /* border: 1px solid; */
`;

const Input = styled.input`
  padding: 8px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #282525;
`;
const Select = styled.select`
  padding: 8px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #282525;
`;
const Button = styled.button`
  padding: 8px;
  width: 100%;
  background-color: #0055fb;
  color: #ffffff;
  border-radius: 10px;
  border: 1px solid #282525;
`;
const CategorySection = styled.div``;
const CartCategoryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
  ${mobile({justifyContent:"center"})}
`;

const PageButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 8px;
  margin: 10px 5px;
  background-color: #0055fb;
  color: #ffffff;
  /* border-radius: 10px; */
  border: 1px solid #0055fb;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#0055FB" : "#FFFFFF")};
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#0055FB")};
  border: 1px solid #0055fb;
`;
const Category = () => {
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [original_launch, setOriginal_launch] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform your search logic here
    console.log("Selected Option:", status);
    console.log("Input 1:", type);
    console.log("Input 2:", original_launch);
    getData();
  };

  const [capsules, setCapsules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); //
  //   console.log("cap : ",capsules)

  useEffect(() => {
    // Call the getAPIData function to fetch data
    getAPIData(status, type, original_launch)
      .then((data) => setCapsules(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = capsules.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const createQueryString = () => {
    const queryParams = [];

    if (status) {
      queryParams.push(`status=${status}`);
    }

    if (type) {
      queryParams.push(`type=${type}`);
    }

    if (original_launch) {
      queryParams.push(`original_launch=${original_launch}`);
    }

    return queryParams.join("&");
  };
  const getData = () => {
    const queryString = createQueryString();

    // console.log("queryString",queryString);
    getAPIData(queryString)
      .then((data) => setCapsules(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <SearchSection>
            <Heading>Search form</Heading>
            <FormContainer>
              <Form onSubmit={handleSubmit}>
               
                <Label>
                  <Input
                    type="text"
                    placeholder="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  />
                </Label>

                <Label>
                  <Input
                    type="text"
                    placeholder="original lunch"
                    value={original_launch}
                    onChange={(e) => setOriginal_launch(e.target.value)}
                  />
                </Label>
                <Label>
                  <Select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    {/* <option value="" disabled defaultValue> */}
                    <option value="">Select an option</option>{" "}
                    {/* Option1 is disabled */}
                    <option value="retired">retired</option>
                    <option value="active">active</option>
                    <option value="unknown">unknown</option>
                  </Select>
                </Label>
                <Label>
                  <Button type="submit">Search</Button>
                </Label>
              </Form>
            </FormContainer>
          </SearchSection>
          <CategorySection>
            <CartCategoryContainer>
              {currentItems.map((item, index) => (
                <CategoryItem data={item} key={index} />
              ))}
            </CartCategoryContainer>
            <Pagination>
              {Array.from({
                length: Math.ceil(capsules.length / itemsPerPage),
              }).map((_, index) => (
                <PageButton
                  key={index}
                  onClick={() => paginate(index + 1)}
                  isActive={index + 1 === currentPage}
                >
                  {index + 1}
                </PageButton>
              ))}
            </Pagination>
          </CategorySection>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Category;
