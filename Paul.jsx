import { useState,useEffect } from "react";

function Paul(){
    let [Count,setCount]=useState(0);

    useEffect(()=>{
        console.log("Value completed");
        //code cleanup
        return(()=>{
            console.log("code Cleanup");
        })
    },[Count])
    return(
        <>

        <button onClick={()=>{setCount(Count+1) }}>++</button>

        <h5>Count:{Count}</h5>

        <button onClick={()=>{setCount(Count-1) }}>--</button><br/><br/>
        </>
    )
}

export default Paul;