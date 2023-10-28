import React from "react";
import  ReactDOM  from "react-dom/client";


//JSX in single line 

const jsxheading = <h1>Hello world JSX</h1>

//JSX in multi line

const jsxheading1 = (
                       <h1>Hello World from JSX</h1>,
                       <h1>Hello world JSX</h1>
)



//Component 
const FooterComponent=()=>
(
   <div className="container">
        <h1>this is footer component</h1>
   </div>  
);

//React Element
const Title =
(
    <h3>Creating Food Ordering App
        <FooterComponent/>
    </h3>
)













const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Title)






