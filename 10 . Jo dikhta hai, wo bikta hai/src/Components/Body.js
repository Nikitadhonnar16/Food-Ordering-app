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
            <div className="border  bg-slate-100">
             <div className="body mx-48">
                    <div className="filter flex ml-7">

                  
                        <div className="search m-4 p-5">
                            <input type="text" className="search-box w-fit border border-solid border-slate-300 h-7 hover:border-slate-400 rounded-md" value={searchText} onChange={(e)=>
                            {
                                    setsearchText(e.target.value);
                                   
                            }} />
                            <button className="search-btn p-4 bg-orange-500 py-1 px-4 mx-4 rounded text-white hover:bg-orange-600" onClick={()=>
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

                        <div className="my-4 py-4 mt-5">

                         <button className="filter-btn p-4 bg-gray-700 py-1 px-4 mx-4 rounded text-white hover:bg-slate-800" onClick={()=>
                             { //filter logic here
                              FilterList = ListOfRestaurants.filter((res)=>
                                  res.info.avgRating > 4
                                  );
                                  setFilteredRestarants(FilterList);
                               }} >Top Rated Restaurants</button>

                        </div>

                  


              </div>


                
                    <div className="res-container flex flex-wrap ml-9">

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

            </div> 

    )
}

export default Body;