import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ primary }) => (primary ? "red" : "blue")};
  color: white;
  display: flex;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
  cursor: pointer;
`;

const ReversedButton = (props) => <StyledButton {...props} children={props.children.split("").reverse()}/>;

export default function Button({ text, primary }) {
  return <StyledButton as={ReversedButton} primary={primary}>{text}</StyledButton>;
}
