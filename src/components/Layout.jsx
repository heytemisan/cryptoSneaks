import React from 'react'
import styled from 'styled-components';
import allstars from '../assets/allstars.png';
import brightBlue from '../assets/brightBlue.png';
import sneakers from '../assets/sneakers.png';
import yeezy from '../assets/yeezy.png';
import airMax from '../assets/airMax.png';

import reebok from '../assets/reebok.png';
import puma from '../assets/puma.png';
import gucci from '../assets/gucci.png';
import adidass from '../assets/adidass.png'
import jordan from '../assets/jordan.png'
import allstar from '../assets/allstar.png'

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

    .item_img {
        width:30px;
        display: block;
        margin-left: auto;
        margin-right: auto;
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
        img:sneakers,
        bgColor: "#BD1550",
    },
    {
        id:2,
        id_no:"#00002",
        date: "11.01.22",
        sname: "Bright Blue",
        city: "Chicago",
        price: "0.25 ETH",
        img:brightBlue,
        bgColor: "#26ADE4",
    },
    {
        id:3,
        id_no:"#00003",
        date: "11.01.22",
        sname: "All Stars",
        city: "Lightening McQueen",
        price: "0.25 ETH",
        img:allstars,
        bgColor: "#FF9C00",
    },
    {
        id:4,
        id_no:"#00004",
        date: "11.01.22",
        sname: "Reebok",
        city: "Chicago",
        price: "0.25 ETH",
        img:reebok,
        bgColor: "#343838",
    },
    {
        id:5,
        id_no:"#00005",
        date: "11.01.22",
        sname: "AirMax",
        city: "Chicago",
        price: "0.25 ETH",
        img:airMax,
        bgColor: "#170409",
    },
    {
        id:6,
        id_no:"#00005",
        date: "11.01.22",
        sname: "All Stars1",
        city: "Chicago",
        price: "0.25 ETH",
        img:allstar,
        bgColor: "#CBE86B",
    },
    {
        id:7,
        id_no:"#00005",
        date: "11.01.22",
        sname: "Adidas",
        city: "Chicago",
        price: "0.25 ETH",
        img:adidass,
        bgColor: "#033649",
    },
    {
        id:8,
        id_no:"#00005",
        date: "11.01.22",
        sname: "Black Menta",
        city: "Gucci",
        price: "0.25 ETH",
        img:gucci,
        bgColor: "#ED303C",
    }
]


const Layout = () => {
    return (
        <Grid>
            {
            Sdata.map(item => (
                <div className="content1" key={item.id} style={{background: item.bgColor}}>
                    <div className="item_flex">
                        <p className='item_p'>{item.id_no}</p>
                        <p className="item_p">{item.date}</p>
                    </div>
                    <img src={item.img} alt="img" className='item_img'/>
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
