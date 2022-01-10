import React from 'react'
import styled from 'styled-components'


const FooterContent = styled.div`
    height: 6vh;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top:10px;
    padding-left: 10px;
    padding-left: 10px;
    font-family: 'PixelOperatorMonoHBRegular';
`


const Footer = () => {
    return (
        <FooterContent>
            <h3 class="sc-gsDKAQ QEzsj">Made with ❤️ by Temisan Momodu </h3>
        </FooterContent>
    )
}

export default Footer
