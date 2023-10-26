import React, { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  margin: 20px 0;
`;

const Input = styled.select`
  padding: 12px;
  width: 100%;
  border: none;
  outline: none;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 16px;
  background-color: #F6FBFF;

  &:focus {
    border: 2px solid #0055fb;
  }
`;

const Label = styled.label`
  position: absolute;
  top: ${(props) => (props.hasValue? '-16px' : '12px')};
  /* top: ${(props) => (props.hasValue || props.isFocused ? '5px' : '12px')}; */
  left: 10px;
  pointer-events: none;
  transition: transform 0.2s ease, font-size 0.2s ease;
  font-size: ${(props) => (props.hasValue || props.isFocused ? '12px' : '16px')};
  color: ${(props) => (props.isFocused ? '#0055fb' : '#888383')};
  margin: ${(props) => (props.hasValue || props.isFocused ? '5px 0' : '0')};
  background-color: ${(props) => (props.hasValue || props.isFocused ? '#F6FBFF' : 'none')};

`;
const Option = styled.option`
   /* background-color: ${(props) => (props.selected ? '#0055fb' : 'none')};
  color: ${(props) => (props.selected ? '#fff' : '#000')}; */
`

function CustomDropdown(props) {
  const [isFocused, setIsFocused] = React.useState(false);
  const { options, selectedValue, placeholder, onChange, name } = props;
  const hasValue = selectedValue !='';

  return (
    <InputContainer>
      <Input
        value={selectedValue}
        onChange={(e) => onChange(e)}
        name={name}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <Option value=""></Option>
        {options.map((option, index) => (
          <Option value={option.value} key={option.id} >
            {option.value}
          </Option>
        ))}
      </Input>
      <Label hasValue={hasValue} isFocused={isFocused}>{placeholder}</Label>
    </InputContainer>
  );
}

export default CustomDropdown;
