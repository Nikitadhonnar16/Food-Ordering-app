import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestarantMenu from "../utils/useRestarantMenu";



const RestarantMenu=()=>
{

  const {resId}=useParams();
  const resInfo=useRestarantMenu(resId);

 



         if(resInfo===null) return <Shimmer/>;

          const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
          const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
          console.log(itemCards);




        
          return(
  
            <div className="Menu">
                <h1>{name}</h1>
                <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
                   
                    <ul >
                         {itemCards && itemCards.map((item)=>
                         <li key={item.card.info.id}>{item.card.info.name}  -  {"Rs."} {item.card.info.price/100} </li>)}
                        
                    </ul>

            </div>
    )
}

export default RestarantMenu;