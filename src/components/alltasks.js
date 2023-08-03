import React from 'react';

function Alltasks(props){
    function func(event){
        let data={key:props.task}
        // event.preventDefault()
        fetch("/api/alldelete",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(response=>response.json())
        
    }
    console.log(props);
    return(
       
        <div >
            <form onSubmit={func} >
            <button type="submit" style={{backgroundColor:"white"}}> <img src='https://cdn-icons-png.flaticon.com/512/3405/3405244.png' /> </button>
        <label> {props.task}</label>
    </form>
    
        </div>

    )
}
export default Alltasks;