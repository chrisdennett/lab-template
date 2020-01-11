import React from "react";
import styled from "styled-components";

const TopBar = () => {
  return (
    <Container>
      <Title>TOP BAR</Title>
    </Container>
  );
};

export default TopBar;

const Container = styled.div`
  background: black;
  color: white;
  display: flex;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  flex: 1;
`;
