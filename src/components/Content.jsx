import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Button";
import Icon from "./Icon";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Title = styled.h1`
  color: #aac9f0;
  animation: ${rotate} 3s linear infinite;
`;
const SubTitle = styled(Title)`
  font-size: 12px;
  align-self: center;
`;
const ParagraphTitle = styled(SubTitle)`
  color: grey;
`;
const Section = styled.div`
  background-color: #f0d1aa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #f0aeaa;
  border-radius: 15px;
`;
const ReversedTitle = (props) => (
  <ParagraphTitle {...props} children={props.children.split("").reverse()} />
);
const Content = () => {
  return (
    <Section>
      <Title>💅 Section</Title>
      <SubTitle>I am a subtitle</SubTitle>
      <Button primary text="me first" />
      <Button text="me second" />
      <Icon border="3px solid" statusColor={"steady"} />
      <Icon status="in-progress" />
      <ParagraphTitle as={ReversedTitle}>I am a paragraph title</ParagraphTitle>
    </Section>
  );
};

export default Content;
