import { CDN_URL } from "../utils/constants";
import { FcRating } from "react-icons/fc";

const RestaurantCard =(props) =>
{
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating }= resData?.info;
    const {deliveryTime}=resData?.info?.sla;
    return (

 
        <div className="res-card p-4 m-4 w-60">
            <img className="res-logo rounded-xl h-44 w-64" alt="" src={
             CDN_URL + cloudinaryImageId }  />
             <div className="font-family: ProximaNova,arial,Helvetica Neue,sans-serif text-lg font-semibold text-slate-700">
                <h3>{name}</h3>
                <h4 className="flex"> <span className="m-1"><FcRating/></span> {avgRating}  Stars . {deliveryTime} Minutes</h4>
             </div>
                <h4>{cuisines.join(", ")} </h4>
                
           
            
         </div>



    )
}

export default RestaurantCard;