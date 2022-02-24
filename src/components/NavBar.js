import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: right;
    margin: 20px 50px;
    z-index: 15;
    li {
        padding: 18px 30px;
    }

    @media(max-width:768px){
        margin: 0;
        flex-direction: column;
        background-color: #1564df;
        position: fixed;
        transform: ${props => props.open ? "translateX(0)" : "translateX(100%)"};
        transition: all .3s linear;
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        li {
            color:white;
        }
    }
`;

const NavBar = ({open}) => {
  return (
    <Ul open={open}>
        <li>Home</li>
        <li>Docs</li>
        <li>Buy Me a Coffee</li>
        <li>Github</li>
    </Ul>
  )
}

export default NavBar;