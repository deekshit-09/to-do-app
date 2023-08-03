import React from 'react';
import Heading from "./Heading";
import Allinput from "./allinput"

function Allnote(){
    return (
        <div>
        <div className="box" id="heading">
            <Heading 
            />
        </div>
        <div className="box">
            <p> click on categories to navigate</p>
            <Allinput />
        </div>
        
        </div>


        )
    
}

export default Allnote;