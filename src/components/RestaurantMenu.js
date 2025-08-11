import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router";
import { MENU_API } from "../utils/constants";


const RestaurantMenu = () =>{

    const {resId} = useParams();

    const[resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu = async() =>{
        const data = await fetch(
           MENU_API + resId
        );
        const json = await data.json();

        setResInfo(json.data);
    };
    if(resInfo === null ) return <Shimmer/>;

    const {name, avgRating,totalRatingsString,costForTwoMessage,cuisines,sla}  = resInfo?.cards[2]?.card?.card?.info;
    const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>⭐️{avgRating} ({totalRatingsString})       {costForTwoMessage}</p>
            <p></p>
            <p>{cuisines.join(", ")}</p>
            <p>{sla.minDeliveryTime}-{sla.maxDeliveryTime} mins</p>

            <h2>Menu</h2>
            <div className="menu-container">
                <ul>
                    {itemCards.map(item => <li key={item.card.info.id} > {item.card.info.name} </li>)}
                    
                </ul>
            </div>
        </div>
    );
}

export default RestaurantMenu;