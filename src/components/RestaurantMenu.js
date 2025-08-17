import Shimmer from "./Shimmer";
import {useParams} from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null ) return <Shimmer/>;

    const {name, avgRating,totalRatingsString,costForTwoMessage,cuisines,sla}  = resInfo?.cards[2]?.card?.card?.info;
    const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p>⭐️{avgRating} ({totalRatingsString})       {costForTwoMessage}</p>
            <p></p>
            <p>{cuisines.join(", ")}</p>
            <p>{sla.minDeliveryTime}-{sla.maxDeliveryTime} mins</p>

            {categories.map((category) => (
                <RestaurantCategory data={category?.card?.card}/>
            ))}
        </div>
    );
}

export default RestaurantMenu;