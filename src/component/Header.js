import React from 'react'
import Menu from "./svg/bars-solid.svg"
import Close from "./svg/times-solid.svg"
import {Link} from 'react-router-dom'
import { useState } from 'react/cjs/react.development'

const Header = () => {
    const [menu, setMenu] = useState(false)
    const togleMenu = ()=>{
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? -22 : "-115%" 
    }
    return (
        <div>
            <header>
                <div className = "logo">
                <h1><Link to="/products"> Clock</Link></h1>
                </div>

                <ul style={styleMenu}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Contacts</Link></li>
                    <li><Link to="/">Login / Register</Link></li>
                    <li onClick={togleMenu}>
                        <img src={Close} alt= "Loading img ....." width= "30" className="menu"/>
                    </li>
                </ul>
                <div className="menu" onClick={togleMenu}>
                    <img src={Menu} alt="" width="30" />
            </div>
            </header>
        </div>
    )
}

export default Header
