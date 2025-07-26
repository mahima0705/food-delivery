/*
* Header
    - logo
    - nav items
* Body
    - search
    - restaurant container
        - restaurant card
* Footer
    - copyright
    - links
    - address
    - contact
*/


import React from "react";
import ReactDOM from "react-dom/client";


const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className = "logo"src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-by-simplepixelsl-brandcrowd.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const ResCard = () =>{
    return(
        <div className="res-card">
            <h3>Burger King</h3>
        </div>
    );
};

const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <ResCard />
            </div>
        </div>
    );
};


const AppLayout  = () => {
    return (
        <div className = "app">
            <Header />
            <Body />
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
