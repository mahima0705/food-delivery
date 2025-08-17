import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return(
        <div className="w-[350px] m-4 p-4 rounded-2xl hover:shadow-xl" >
            <img className="w-[350px] h-[250px] rounded-2xl" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <div className="name-ratings flex justify-between py-3">
                <h3 className="font-bold ">{name}</h3>
                <h4>⭐️{avgRating}</h4>
            </div>
            <div className="cuisine-cost text-gray-500"><p>{cuisines.join(", ")}</p>
                <p>{costForTwo}</p>
            </div>
            <p className="time">{deliveryTime} minutes</p>
        </div>
    );
};

export default RestaurantCard;