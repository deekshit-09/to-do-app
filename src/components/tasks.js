import React from 'react';
import {Link} from "react-router-dom"

function Tasks(props){
    function func(event){
        let data={key:props.task}
        // event.preventDefault()
        fetch("/api/check",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(response=>response.json())
        
    }
    function func2(event){
        let data={key:props.task}
        fetch("/api/redirect",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(response=>response.json())

    }

    console.log(props);
    return(
       
        <div onClick={func2}>
            <form onSubmit={func} >
            <button type="submit" style={{backgroundColor:"white"}}> <img src='https://cdn-icons-png.flaticon.com/512/3405/3405244.png' /> </button>
            <Link to="/all" style={{textDecoration: 'none'}}>
        <label style={{textDecoration: 'none'}}> {props.task}</label>
        </Link>
    </form>
    
        </div>

    )
}
export default Tasks;