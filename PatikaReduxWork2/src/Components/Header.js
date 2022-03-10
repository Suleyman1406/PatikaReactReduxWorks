import React from 'react';
import styled  from 'styled-components'

const Container=styled.div`
 
    background-color: white;
`
const Head=styled.h2`
    width: 60%;
    margin: auto;
    padding: 25px 0px;

`
const Header = () => {
  return (
    <Container>
        <Head>Have a Fun!</Head>
    </Container>
  )
};

export default Header;
