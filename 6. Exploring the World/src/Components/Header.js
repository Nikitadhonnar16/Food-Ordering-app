import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";


const Header =() =>
{

    const [btnName, setbtnName]=useState("Login ");
    
    // console.log("Header Called");  


//if no dependancy array => useEffect is called on every render 
//if dependancy array is empty = [] => then useEffect called on only initial render (just once)
// if dependancy arrat is [btnName] => called every time btnName is updated 
 useEffect(()=> {
  console.log("useEffect called");

 },[btnName]);


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
                <li>Contact Us</li>
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