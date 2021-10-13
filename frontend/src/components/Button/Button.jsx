import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`
width: 
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = (props) => {
  return <StyledButton> {props.title} </StyledButton>;
};

export default Button;
