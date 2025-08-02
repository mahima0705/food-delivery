import RestaurantCard from "./RestaurantCard";
import {useState,useEff, useEffect} from "react"
import Shimmer from "./Shimmer";

const Body = ()=>{

    const [listOfRestaurants ,setListOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(
            "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);

        setListOfRestaurants(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    

    return listOfRestaurants.length===0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={()=> {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.3
                    );
                    setListOfRestaurants(filteredList);
                }}
                >
                    Top Rated Restaurant
                </button>
            </div>

            <div className="res-container">
                {
                    listOfRestaurants.map(restaurant =>(
                    <RestaurantCard key= {restaurant.info.id} resData={restaurant}/>
                ))
                }
            </div>
        </div>
    );
};

export default Body;