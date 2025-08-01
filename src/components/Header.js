import { LOGO_URL } from "../utils/constants";
import {useState} from "react";

export const Header = () =>{
    const [btnName,setBtnName] = useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
                <img className = "logo"src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        setBtnName("Logout");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;