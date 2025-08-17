import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () =>{
    const [btnName,setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return(
        <div className="flex justify-between bg-green-100 shadow-xl">
            <div className="logo-container">
                <img className = "w-25"src={LOGO_URL}/>
            </div>
            <div className="flex align-middle ">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4 hover:text-[#f85547]">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 hover:text-[#f85547]">
                       <Link to="/about">About Us</Link> 
                    </li>
                    <li className="px-4 hover:text-[#f85547]">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 hover:text-[#f85547]">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 hover:text-[#f85547]">Cart</li>
                    <button className="px-4 hover:cursor-pointer" onClick={() => {
                        btnName === "Login"? setBtnName("Logout"):setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;