import React from 'react'
import "./NavNews.css"
import HamburgerDrawer from "./HamurgerDrawer"

const NavNews = ({ setCategory }) => {
    return (
        <div className="nav">
            <div className="icon">
                <HamburgerDrawer setCategory={setCategory}  />
            </div>


            <img 
            style={{cursor: "pointer"}}
            src="https://thewikinews.com/wp-content/uploads/2021/06/Copy-of-The-1-103x41.png"
            height="80%"
            alt="logo"
            />
        </div>
    )
}

export default NavNews
