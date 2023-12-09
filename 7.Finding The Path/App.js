import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestarantMenu from "./src/Components/RestarantMenu";



const AppLayout =() => {
    return (
        <div className="app" >
            <Header/>
            <Outlet/> 
           
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children: [
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestarantMenu/>,
            },
        ],
        errorElement:<Error/>,
    },
   
]);










const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)






