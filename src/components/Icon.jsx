import styled from "styled-components";

const StyledIcon = styled.div`
  background-color: ${({ statusColor }) => {
    if (statusColor === "ready") return "yellow";
    else if (statusColor === "steady") return "orange";
    else if (statusColor === "go") return "green";
    else return "red";
  }};
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin: 5px;
  border: ${({ border }) => border || "3px solid blue"};
  margin-left: ${({ status }) => {
    if (status === "in-progress") return "70px";
    else if (status === "done") return "140px";
    else return "5px";
  }};

  &:hover {
    background-color: grey;
  }
`;

export default function Iocn({ border, status, statusColor }) {
  return (
    <StyledIcon border={border} status={status} statusColor={statusColor} />
  );
}
