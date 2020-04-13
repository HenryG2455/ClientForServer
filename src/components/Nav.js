import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
  display: flex;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  margin: 1px;
  color: black;
  font-size: 110%;
  padding-left: 5px;
  padding-right: 5px;
  color: #ffffff;
  text-decoration: none;
`;
const NavBar = styled.nav`
  display: flex;
  background-color: #808b96;
  padding: 10px, 2px;
  width: 100%;
  height: 45px;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0%;
`;
const Ul = styled.ul`
  display: flex;
  margin: 1px;
  color: black;
  padding-inline-start: 0px;
`;
const RegText = styled.p`
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
`;

function Nav() {
  return (
    <NavBar>
      <Ul>
        <Link to="/">
          <Li>Home</Li>
        </Link>
        <Link to="/register">
          <Li>Register</Li>
        </Link>
        <Link to="/login">
          <Li>Login</Li>
        </Link>
        <Link to="/search">
          <Li>Search</Li>
        </Link>
      </Ul>
    </NavBar>
  );
}

export default Nav;
