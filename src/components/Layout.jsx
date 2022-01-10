import React from 'react'
import styled from 'styled-components';
import allstars from '../assets/allstars.png';
import brightBlue from '../assets/brightBlue.png';
import sneakers from '../assets/sneakers.png';
import airMax from '../assets/airMax.png';
import reebok from '../assets/reebok.png';
import gucci from '../assets/gucci.png';
import adidass from '../assets/adidass.png'
import allstar from '../assets/allstar.png'

const Grid = styled.div `
    display:grid;
    grid-template-columns: 0.8fr 0.8fr 0.8fr 0.8fr;
    grid-template-rows: 300px 300px;
    grid-gap: 0.4rem;
    background-color: white;
    padding-left:40px;
    padding-right:40px;
    margin-top: 30px;

    .content1 {
        background-color:grey;
        padding-left:10px;
        padding-right:10px;
    }

    .item_flex {
        display:flex;
        justify-content:space-between;
        color:#3E4147;
    }

    .item_p {
        font-size:10px;
    }

    .item_name {
        color:#fff;
        font-family: 'IndustrialRegular'; 
    }

    .item_city {
        color:#fff;
        font-family: 'IndustrialRegular'; 
        font-weight:800;
        line-height: 0;
    }

    .item_price {
        color:#fff;
        font-family: 'IndustrialRegular'; 
        font-weight:800;
        font-size:1rem;
    }

    .item_img {
        margin-top:40px;
        width:100px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 480px) {
        @media screen and (max-width: 550px) {
                grid-template-columns: 1fr;
                grid-template-rows:0.4fr 0.4fr 0.4fr 0.4fr 0.4fr 0.4fr 0.4fr;
    }
`

const Sdata = [
    {
        id:1,
        id_no:"#00001",
        date: "11.01.22",
        sname: "Nike Jordan1",
        city: "Chicago",
        price: "0.45 ETH",
        img:sneakers,
        bgColor: "#BD1550",
    },
    {
        id:2,
        id_no:"#00002",
        date: "11.01.22",
        sname: "Bright Blue",
        city: "Chicago",
        price: "0.35 ETH",
        img:brightBlue,
        bgColor: "#26ADE4",
    },
    {
        id:3,
        id_no:"#00003",
        date: "11.01.22",
        sname: "All Stars",
        city: "McQueen",
        price: "0.30 ETH",
        img:allstars,
        bgColor: "#FF9C00",
    },
    {
        id:4,
        id_no:"#00004",
        date: "11.01.22",
        sname: "Reebok",
        city: "Nigeria",
        price: "0.40 ETH",
        img:reebok,
        bgColor: "#3FB8AF",
    },
    {
        id:5,
        id_no:"#00005",
        date: "11.01.22",
        sname: "AirMax",
        city: "Chicago",
        price: "0.45 ETH",
        img:airMax,
        bgColor: "#170409",
    },
    {
        id:6,
        id_no:"#00005",
        date: "11.01.22",
        sname: "All Stars1",
        city: "Chicago",
        price: "0.76 ETH",
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
        price: "0.56 ETH",
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
                    <p className="item_name">{item.sname}</p>
                    <h3 className='item_city'>{item.city}</h3>
                    <p className="item_price">{item.price}</p>
                </div>
            ))
            }
        </Grid>
    )
}

export default Layout
