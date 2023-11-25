import { LOGO_URL } from "../utils/constants";
import { useState } from "react";


const Header =() =>
{

    const [btnName, setbtnName]=useState("Login ")


    return (

    <div className="header">
        <div className="logo-container">
              
            <img className="logo" 
            src={LOGO_URL} alt="" />
        </div>

        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact US</li>
                <li>Cart</li>
                <button className="login" onClick={()=>
                {
                    btnName==="Login"?
                    setbtnName("Logout"):
                    setbtnName("Login");

                    console.log(btnName);
                }}>{btnName}
               
                </button>
             

            </ul>

        </div>  

     </div>    
    )
}

export default Header;