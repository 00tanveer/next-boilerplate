import React from 'react'
import Head from 'next/head';
import styled from 'styled-components'
import Nav from '../components/nav';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const StyledContainer = styled.div`

`;

const Home = () => {
  return(
    <StyledContainer>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <Title>I'm learning Next!</Title>
    </StyledContainer>
  );
}

export default Home;