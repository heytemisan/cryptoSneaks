import React from 'react';
import styled from 'styled-components';

const Header = styled.div `
    font-family: 'IndustrialRegular'; 
    width: 400px;
    align-content: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;

    h1 {
        text-align:center;
        font-size:3rem;
    }
`

const subHeader = () => {
    return (
        <Header>
            <h1>Collectible kicks for the digital age.</h1>
        </Header>
    )
}

export default subHeader
