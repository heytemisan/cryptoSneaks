import React from 'react'
import sneakerLogo from '../img/sneakers.png';
import SubHeader from './SubHeader';

function Header() {
    return (
        <div className="header">
            <header>
                <h2 className="logo">Crypto</h2> 
                <img src={sneakerLogo} alt="shoe" className='sneakers'/>
            </header>       
            <SubHeader/>
        </div>
    )
}

export default Header
