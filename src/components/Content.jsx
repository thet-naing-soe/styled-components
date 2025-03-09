import React from "react";
import styled from "styled-components";
import Button from './Button';  
import Icon from './Icon';  

const Title = styled.h1`
  color: #aac9f0;
`;
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
      <Button primary text="me first" />
      <Button text="me second" />
      <Icon primary/>
      <Icon />
    </Section>
  );
};

export default Content;


