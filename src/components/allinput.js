import React from "react";
import {useEffect} from 'react';
import {useState} from "react";

import Alltasks from "./alltasks"
// import "../public/styles.csss"
function Allinput(){
  const[cat,setcat]=useState("");
  function func(event){
    let data= {item:cat};
    // event.preventDefault()
    // console.log(tasks)
    fetch("/api/alladd",{
      method:"post",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(data)
    }).then(response=>response.json())
  }
  const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch("/api/sendAll")
        .then(res=> res.json())
        .then((data)=>setItems(data));
    }, []);
    function kiki(){
      return items.map((items,i)=>{
          return <Alltasks
        //   key={items.key}
          task={items.name}
          />
      })
  }
return (
    <div >
    {kiki()}
    <form  onSubmit={func}>
        <input type="text" name="newItem" placeholder="New Item" autocomplete="off"  onChange={e=>setcat(e.target.value)} />
        {/* <input type="submit" value={"+"} /> */}
        <button type="submit">+</button>
      </form>
    </div>
)
}
export default Allinput;