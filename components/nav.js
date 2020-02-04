import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    font-size: 50px;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;
const Nav = () => {
  return(
    <StyledNav>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Nav;