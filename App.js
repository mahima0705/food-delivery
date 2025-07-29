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

const ResCard = (props) =>{
    return(
        <div className="res-card">
            <img className="res-img" alt="res-logo" src={props.image}/>
            <div className="name-ratings">
                <h3>{props.resName}</h3>
                <h4>{props.stars}⭐️</h4>
            </div>
            <div className="cuisine-time">{props.cuisine}<br/>
            {props.time} minutes
            </div>
        </div>
    );
};

const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <ResCard
                    image = "https://b.zmtcdn.com/data/pictures/chains/5/61555/c8008523810583087401ff292c1763a3.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                    resName = "Burger King" stars ="4.2" cuisine = "Burger, Fast Food, Desserts, Beverages" time="49"
                />
                <ResCard 
                    image = "https://b.zmtcdn.com/data/pictures/chains/4/50574/24697b617bb8aaf5b1c7df9a7074a662.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                    resName = "KFC" stars ="4.0" cuisine = "Burger, Rolls, Fast Food" time ="35"
                />
                <ResCard 
                    image = "https://b.zmtcdn.com/data/pictures/chains/1/50691/96f5b8c9334548312fe1175c711be46e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                    resName = "Meghana Foods" stars ="4.5" cuisine = "Biryani, Andhra, North Indian, Seafood" time ="48"
                />
                <ResCard 
                    image = "https://b.zmtcdn.com/data/pictures/chains/2/50382/ce0341e58cf96f163101b4dff77ed938.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                    resName = "Domino's Pizza" stars ="4.3" cuisine = "Pizza, Fast Food, Desserts, Beverages" time ="21"
                />
                <ResCard 
                    image = "https://b.zmtcdn.com/data/pictures/5/18263385/bfe59ef78d237e69af2c128473176552_o2_featured_v2.jpg"
                    resName = "Polar Bear" stars ="4.5" cuisine = "Ice Cream, Desserts, Shake, Beverages, Sandwich" time ="43"
                />
                <ResCard 
                    image = "https://b.zmtcdn.com/data/pictures/4/19013314/c07aa5ff38e9744f91accd98cd5b19d0.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                    resName = "Starbucks Coffee" stars ="4.3" cuisine = "Cafe, Coffee, Desserts, Beverages" time ="17"                
                />
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
