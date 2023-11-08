import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";

const Body =() =>
{

const [ListOfRestaurants, setListOfRestaurants]=useState(resList)

  
    return(
             <div className="body">
                    <div className="filter">

                    <button className="filter-btn" onClick={()=>
                   { //filter logic here
                    FilterList = ListOfRestaurants.filter((res)=>
                    res.info.avgRating > 4
                         );
                        setListOfRestaurants(FilterList);
                    }} >Top Rated Restaurants</button>

                    </div>

                    <div className="res-container">

                    {ListOfRestaurants.map((restaurant)=>
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} /> 
                    )
                    }
                     
                    
                    
                    
                    </div>
             </div>

    )
}

export default Body;