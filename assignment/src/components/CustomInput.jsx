import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  margin: 20px 0;
`;

const Input = styled.input`
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
  top: ${(props) => (props.hasValue || props.isFocused ? '5px' : '12px')};
  left: 10px;
  pointer-events: none;
  transition: top 0.2s ease, font-size 0.2s ease;
  font-size: ${(props) => (props.hasValue || props.isFocused ? '12px' : 'inherit')};
  transform: ${(props) => (props.hasValue || props.isFocused ? 'translateY(-16px)' : 'inherit')};
  color: ${(props) => (props.isFocused ? '#0055fb' : '#888383')};
  background-color: ${(props) => (props.hasValue || props.isFocused ? '#F6FBFF' : 'none')};
`;

function CustomInput(props) {
  const { placeholder, type, value, onChange, name } = props;
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <InputContainer>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
        name={name}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Label hasValue={value} isFocused={isFocused}>
        {placeholder}
      </Label>
    </InputContainer>
  );
}

export default CustomInput;
