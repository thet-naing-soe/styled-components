import React from "react";
import styled from "styled-components";

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
const Button = styled.button`
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
`;
const Content = () => {
  return (
    <Section>
      <Title>💅 Section</Title>
      <Button>Click me</Button>
      <Button>Click me</Button>
    </Section>
  );
};

export default Content;

//Mini Challenge
// In this mini challenge I would like you to help me out for the next section by
// adding two plain white buttons with the words 'Click me' in each below the word
// Section. Please use the approach we have learnt today.
// We will need this for the next scrim.
