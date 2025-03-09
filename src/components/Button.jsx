import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ primary }) => (primary ? "red" : "blue")};
  color: white;
  display: flex;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    background-color: grey;
  }

  .subtext {
    font-size: 10px;
  }
`;

const ReversedButton = (props) => (
  <StyledButton {...props} children={props.children.split("").reverse()} />
);

export default function Button({ text, primary }) {
  return (
    <StyledButton primary={primary}>
      {text}
      <p className="subtext">sub text</p>
    </StyledButton>
  );
}
