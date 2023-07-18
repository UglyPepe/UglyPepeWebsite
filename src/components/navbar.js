import React, {useState} from 'react';
import {Link} from "react-router-dom";

function Navbar() {

    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [burger_class, setBurgerClass] =  useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden")

    
    const updateMenu = () => {
        if (!isMenuClicked){
            
            setIsMenuClicked(true);
            setMenuClass("menu visible")
        }
        else {
           
            setIsMenuClicked(false);
            setMenuClass("menu hidden")
        }
    }


    return (
        <div>
        <nav className="navContainer">

            

            <div className="navbarLeftSide">
            <Link to="/home" ><img src={'../imgs/ROUGHUGLYPEPE_nobg.png'} className="App-logo" alt="logo" /></Link>
            </div>

            <div className="navLinkContainer">
            <Link className="navLinks" to="/home" ><p>Home</p></Link>
            <Link className="navLinks" to="/about" ><p>About</p></Link>
            <Link className="navLinks" to="/roadmap" ><p>RoadMap</p></Link>
            </div>

            <div className="navBuyButtonContainer">
            <a className="uniswapNavButton" href="https://app.uniswap.org/#/tokens/ethereum/0xba25bfbfc596c88576dfe0d4d95a87b34a291f45">buy now</a>
            </div>

            </nav>
            <nav className="mobileNav">

            <div className="navbarLeftSide">
            <Link to="/home" ><img src={'../imgs/ROUGHUGLYPEPE_nobg.png'} className="App-logo" alt="logo" /></Link>
            </div>


            <div className="burgerMenu">
                <div className="burger-bar" onClick={updateMenu} ></div>
                <div className="burger-bar" onClick={updateMenu} ></div>
                <div className="burger-bar" onClick={updateMenu} ></div>
            </div>

            

        </nav>
        <div className={menu_class}>

        <div className="hamLinkContainer">
            <Link className="hamLinks" to="/home" onClick={updateMenu}><p>Home</p></Link>
            <Link className="hamLinks" to="/about" onClick={updateMenu}><p>About</p></Link>
            <Link className="hamLinks" to="/roadmap" onClick={updateMenu}><p>RoadMap</p></Link>
        </div>

        </div>
        </div>
    );
}

export default Navbar;