import React from 'react';
import Heading from "./Heading";
import Catinput from "./catinput"

function Catnote(){
    return (
        <div>
        <div className="box" id="heading">
            <Heading 
            />
        </div>
        <div className="box">
        <p> click on categories to navigate</p>
            <Catinput />
        </div>
        
        </div>


        )
    
}

export default Catnote;