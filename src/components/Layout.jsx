import React from 'react'
import styled from 'styled-components';
import images from '../assets';

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

    .item_flex {
        display:flex;
        justify-content:space-between;
    }

    .item_p {
        font-size:10px;
    }
`

const Sdata = [
    {
        id:1,
        id_no:"#00001",
        date: "11.01.22",
        sname: "Nike Jordan1",
        city: "Chicago",
        price: "0.25 ETH",
        img:"Sneakers"
    },
    {
        id:2,
        id_no:"#00002",
        date: "11.01.22",
        sname: "Bright Blue",
        city: "Chicago",
        price: "0.25 ETH",
        img:"allstars.png"
    },
    {
        id:3,
        id_no:"#00003",
        date: "11.01.22",
        sname: "Bright Blue",
        city: "Lightening McQueen",
        price: "0.25 ETH"
    },
    {
        id:4,
        id_no:"#00004",
        date: "11.01.22",
        sname: "Black Menta",
        city: "Chicago",
        price: "0.25 ETH"
    },
    {
        id:5,
        id_no:"#00005",
        date: "11.01.22",
        sname: "Black Menta",
        city: "Chicago",
        price: "0.25 ETH"
    }
]


const Layout = () => {
    return (
        <Grid>
            {
            Sdata.map(item => (
                <div className="content1" key={item.id}>
                    <div className="item_flex">
                        <p className='item_p'>{item.id_no}</p>
                        <p className="item_p">{item.date}</p>
                    </div>
                    <img src={images[item.img]} alt="" />
                    <p>{item.city}</p>
                    <h3>{item.sname}</h3>
                    <p>{item.price}</p>
                </div>
            ))
            }
        </Grid>
    )
}

export default Layout
