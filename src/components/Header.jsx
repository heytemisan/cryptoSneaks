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
            <p className="description"><span>CryptoSneaks™</span> are meticously handmade digital shoes</p>
            <form action="">
                <input type="email" placeholder="you@yourmail.com"/>
                <button type="submit">Sign Me Up</button>
            </form>
            <p>Email address used so</p>
        </div>
    )
}

export default Header
