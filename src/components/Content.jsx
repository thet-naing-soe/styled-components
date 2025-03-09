import React from "react";
import styled from "styled-components";
import Button from './Button';  
import Icon from './Icon';  

const Title = styled.h1`
  color: #aac9f0;
`;
const SubTitle = styled(Title)`
  font-size: 12px;
  align-self: center;
`
const ParagraphTitle = styled(SubTitle)`
  color: gray;
`
const Section = styled.div`
  background-color: #f0d1aa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #f0aeaa;
  border-radius: 15px;
`;
const Content = () => {
  return (
    <Section>
      <Title>💅 Section</Title>
      <SubTitle>I am a subtitle</SubTitle>
      <Button primary text="me first" />
      <Button text="me second" />
      <Icon primary/>
      <Icon />
      <ParagraphTitle>I am a paragraph</ParagraphTitle>
    </Section>
  );
};

export default Content;


