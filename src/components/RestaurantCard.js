import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return(
        <div className="res-card">
            <img className="res-img" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <div className="name-ratings">
                <h3>{name}</h3>
                <h4>⭐️{avgRating}</h4>
            </div>
            <div className="cuisine-cost"><p>{cuisines.join(", ")}</p>
                <p>{costForTwo}</p>
            </div>
            <p className="time">{deliveryTime} minutes</p>
        </div>
    );
};

export default RestaurantCard;