import React, {useEffect, useState } from "react";
import styled from "styled-components";
import { getAPIData } from "../services/category-service";
import { mobile, tablate } from "../responsive";
import CustomInput from "./CustomInput";
import CustomDropdown from "./CustomDropdown";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import LoaderIcon from "./LoaderIcon";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  width: 100%;
  margin: 20px 0;
`;
const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  background-color: #F6FBFF;
  height: auto;
`;
const SearchSection = styled.div`
  padding: 20px;
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
  ${tablate({ width: "45%" })}
  ${mobile({ width: "100%" })}
`;

const Button = styled.button`
  width: 100%;
  appearance: button;
  background-color: #1652f0;
  border: 1px solid #1652f0;
  border-radius: 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.15;
  overflow: visible;
  padding: 12px 16px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: all 80ms ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    background-color: #0843d7; 
  }

  &:active {
    background-color: #0441dc;
  }
`;
const CategorySection = styled.div``;
const LoaderContainer = styled.section`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${mobile({marginLeft:"30px",marginTop:"20px"})}
`;

const CartCategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  ${tablate({ gap: "20px", marginLeft: "15px" })}
  ${mobile({ gap: "0px", marginLeft: "0px" })}
`;
const NoData = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9d9494;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
  ${tablate({ justifyContent: "center" })}
`;
const PagenationContainer = styled.div`
  display: flex;
  border: 1px solid #0055fb;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const PreviousPage = styled.p`
  border-right: 2px solid #0055fb;
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0055fb;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    `
    color:grey;
  `}
`;
const NextPage = styled.p`
  border-left: 2px solid #0055fb;
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0055fb;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    `
    color:grey;
  `}
`;

const PageButton = styled.button`
  width: fit-content;
  height: 40px;
  padding: 10px 15px;
  background-color: #0055fb;
  color: #ffffff;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#0055FB" : "#FFFFFF")};
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#0055FB")};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  ${mobile({ padding: "5px 8px" })}
`;
const Category = () => {
  const options = [
    { id: 1, value: "retired" },
    { id: 2, value: "active" },
    { id: 3, value: "unknown" },
  ];

  const [searchFormData, setSearchFormData] = useState({
    type: "",
    originalLaunch: "",
    status: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    console.log("name", name);
    console.log("value", value);
    console.log("test", searchFormData);
    setSearchFormData({
      ...searchFormData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const [capsules, setCapsules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    // Call the getAPIData function to fetch data
    getAPIData()
      .then((data) => {
        setCapsules(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
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

    if (searchFormData.status) {
      queryParams.push(`status=${searchFormData.status.trim()}`);
    }

    if (searchFormData.type) {
      queryParams.push(`type=${searchFormData.type.trim()}`);
    }

    if (searchFormData.originalLaunch) {
      queryParams.push(`original_launch=${searchFormData.originalLaunch.trim()}`);
    }

    return queryParams.join("&");
  };
  const getData = () => {
    const queryString = createQueryString();
    setIsLoading(true);
    // console.log("queryString",queryString);
    getAPIData(queryString)
      .then((data) => {
        setCapsules(data);
        setIsLoading(false);
        setSearchFormData(
          {
            type: searchFormData.type.trim(),
            originalLaunch: searchFormData.originalLaunch.trim(),
            status:searchFormData.status.trim(),
          })
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        setSearchFormData(
          {
            type: "",
            originalLaunch: "",
            status: "",
          })
      });
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <SearchSection>
            <Heading>Capsules</Heading>
            <FormContainer>
              <Form onSubmit={handleSubmit}>
                <Label>
                  <CustomInput
                    type="text"
                    name="type"
                    placeholder="Type"
                    value={searchFormData.type}
                    onChange={handleInputChange}
                  />
                </Label>
                <Label>
                  <CustomInput
                    type="text"
                    name="originalLaunch"
                    placeholder="Original lunch"
                    value={searchFormData.originalLaunch}
                    onChange={handleInputChange}
                  />
                </Label>
                <Label>
                  <CustomDropdown
                    selectedValue={searchFormData.status}
                    placeholder="Select Status"
                    name="status"
                    value={searchFormData.status}
                    options={options}
                    onChange={(e) =>
                      setSearchFormData({
                        ...searchFormData,
                        status: e.target.value,
                      })
                    }
                  />
                </Label>

                <Label>
                  <Button type="submit">Search</Button>
                </Label>
              </Form>
            </FormContainer>
          </SearchSection>
          <CategorySection>
            <CartCategoryContainer>
              {isLoading ? (
                <LoaderContainer>
                  <LoaderIcon styled={{zIndex:"1002"}}/>
                </LoaderContainer>
              ) : currentItems.length !== 0 ? (
                currentItems.map((item, index) => (
                  <CategoryItem data={item} key={index} />
                ))
              ) : (
                <NoData>No record found</NoData>
              )}
            </CartCategoryContainer>
            <Pagination>
              <PagenationContainer>

                <PreviousPage
                  onClick={() => {
                    if (currentPage > 1) {
                      paginate(currentPage - 1);
                    }
                  }}
                  pageNumber={currentPage - 1}
                  disabled={currentPage <= 1}
                >
                  <NavigateBeforeIcon />
                  Prev
                </PreviousPage>
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
                <NextPage
                  onClick={() => {
                    if (
                      Math.ceil(capsules.length / itemsPerPage) > currentPage
                    ) {
                      paginate(currentPage + 1);
                    }
                  }}
                  pageNumber={currentPage + 1}
                  disabled={
                    currentPage >= Math.ceil(capsules.length / itemsPerPage)
                  }
                >
                  Next
                  <NavigateNextIcon />
                </NextPage>{" "}
              </PagenationContainer>
            </Pagination>
          </CategorySection>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Category;
