import React from 'react'
import styled from 'styled-components';

const Grid = styled.div `
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas: 
    "nav nav nav nav"
    "sidebar main main main"
    "sidebar content1 content2 content3"
    "sidebar footer footer footer";
    grid-gap: 0.4rem;
    background-color: white;
`

const Layout = () => {
    return (
        <Grid>
            layout
        </Grid>
    )
}

export default Layout
