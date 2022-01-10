import React from 'react'
import styled from 'styled-components';

const Grid = styled.div `
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 200px 200px 200px 200px;
    grid-template-areas: 
    "nav nav nav nav"
    "sidebar main main main"
    "sidebar content1 content2 content3"
    "sidebar footer footer footer";
    grid-gap: 0.4rem;
    background-color: white;
    padding-left:40px;
    padding-right:40px;
    margin-top: 30px;

    .content1 {
        background-color:grey;
    }
`

const Layout = () => {
    return (
        <Grid>
            <div className="content1">Content</div>
            <div className="content1">Content</div>
            <div className="content1">Content</div>
            <div className="content1">Content</div>
            <div className="content1">Content</div>
            <div className="content1">Content</div>
            <div className="content1">Content</div>
            <div className="content1">Content</div>
            <div className="content1">Content</div>
            <div className="content1">Content</div>
            <div className="content1">Content</div>
            <div className="content1">Content</div>
        </Grid>
    )
}

export default Layout
