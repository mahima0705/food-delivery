import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react"
import Shimmer from "./Shimmer";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

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
    
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return (<h1>Looks like you're offline!!Please check your internet connection</h1>);

    return listOfRestaurants.length===0 ? <Shimmer/> : (
        <div className="px-10">
            <div className="flex ">
                <div className="m-4 p-4">
                    <input 
                    type="text" 
                    className="border border-solid border-black"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                    />
                    <button className="px-4 py-2 m-4 bg-green-200 rounded-lg hover:cursor-pointer" 
                    onClick={() => {
                        console.log(searchText);

                        const filteredResList = listOfRestaurants.filter(
                            (res) =>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilterdRestaurant(filteredResList);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4">
                    <button className="px-4 py-2 m-4 bg-gray-100 rounded-lg hover:cursor-pointer"
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
            </div>

            <div className="flex flex-wrap px-20">
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