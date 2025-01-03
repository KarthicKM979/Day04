/*import { useState,useRef} from "react";

function Paul(){
    let [Count,setCount]=useState(0);
    let countRef=useRef(0);
    let increment=()=>{
        setCount(Count+1);
        CountRef.current++;

        console.log("Ref: ",CountRef.current)
    }
    return(
        <>

        <button onClick={()=>{setCount(Count+1) }}>++</button>

        <h5>Count:{Count}</h5>

        <button onClick={()=>{setCount(Count-1) }}>--</button>z
        </>
    )
}

// export default Paul;*/
// import { useState, useRef } from "react";
// import Hen from './Hen';
// import { createContext} from 'react';
// export let nameContext=createContext();
// function Paul() {
//   let countRef = useRef(0); 
//   let [name, setName] = useState("Paul"); 
  
//   let updateRef = () => {
//     countRef.current = name;
//     console.log("Ref: ", countRef.current);
//   };

//   return (
//     <>
//       <label>Box</label>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       <button onClick={updateRef}>Update Ref</button>
//       <Hen name="Watter"/>
//       <nameContext.Provider value="water">
//         <Hen/>
//       </nameContext.Provider>
//     </>
//   );
// }

// default Paul;
import { useState, createContext } from "react";
import Hen from './Hen';

export const NameContext = createContext();

function Ref() {
    const [count, setCount] = useState(0);

    return (
        <>
            <button 
                onClick={() => setCount(count + 1)} >Submit</button>
            <h5>Count: {count}</h5>
            <NameContext.Provider value={count}>
                <Hen />
            </NameContext.Provider>
        </>
    );
}

export default Ref;
