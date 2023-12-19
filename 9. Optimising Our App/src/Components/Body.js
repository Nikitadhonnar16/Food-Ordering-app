import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body =() =>
{

const [ListOfRestaurants, setListOfRestaurants]=useState([])
const [FilteredRestarants, setFilteredRestarants]=useState([])

const [searchText, setsearchText]=useState(""); 



//console.log("Body Rendered");

useEffect(()=>{
    fetchData();
},[])

const fetchData= async()=>
{
        const data= await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2183307&lng=72.9780897&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
           
       //convert Data into json  
        const json = await data.json(); 

        //calling swiggy api 
        console.log(json);

       //optional chainning   
      setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
      setFilteredRestarants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);     
};

  
    // return ListOfRestaurants.length===0 ? <Shimmer/>:

    if (ListOfRestaurants?.length === 0) {
        return <Shimmer />
    }
    
    
    
    return (
             <div className="body">
                    <div className="filter">

                  
                        <div className="search">
                            <input type="text" className="search-box" value={searchText} onChange={(e)=>
                            {
                                    setsearchText(e.target.value);
                                   
                            }} />
                            <button className="search-btn" onClick={()=>
                            {
                                //Filter the restarant cards and update the UI 
                                //SearchText

                            const filteredRestarants= ListOfRestaurants.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestarants(filteredRestarants);

                               // console.log(searchText);
                            }
                                
                                
                            }>Search</button>
                        </div>

                    <button className="filter-btn" onClick={()=>
                   { //filter logic here
                    FilterList = ListOfRestaurants.filter((res)=>
                    res.info.avgRating > 4
                         );
                        setFilteredRestarants(FilterList);
                    }} >Top Rated Restaurants</button>


                    </div>


                
                    <div className="res-container">

                    {
                    FilteredRestarants?.map((restaurant)=>
                  <Link 
                   key={restaurant.info.id} 
                   to={"/restaurants/" + restaurant.info.id}> 
                    <RestaurantCard  resData={restaurant} />
                 </Link>
                    )
                    }
                     
                    
                    
                    
                    </div>
             </div>

    )
}

export default Body;