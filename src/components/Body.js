import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react"
import Shimmer from "./Shimmer";
import {Link} from "react-router";

const Body = ()=>{

    const [listOfRestaurants , setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilterdRestaurant]  = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        setListOfRestaurants(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterdRestaurant(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    

    return listOfRestaurants.length===0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                    type="text" 
                    className="search-box"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                    />
                    <button className="search-btn" 
                    onClick={() => {
                        console.log(searchText);

                        const filteredResList = listOfRestaurants.filter(
                            (res) =>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilterdRestaurant(filteredResList);
                    }}>Search</button>
                </div>
                <button className="filter-btn"
                onClick={()=> {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.3
                    );
                    setFilterdRestaurant(filteredList);
                }}
                >
                    Top Rated Restaurant
                </button>
            </div>

            <div className="res-container">
                {
                    filteredRestaurant.map(restaurant =>(
                    <Link key= {restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>
                ))
                }
            </div>
        </div>
    );
};

export default Body;