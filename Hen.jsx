// import Egg from './Egg';
// function Hen(need){
//     return(
//         <>
//         <h3>Hen</h3>
       
//         <Egg need={need.name}/>
//         </>
//     )
// }
// export default Hen;


import { useContext } from "react"; // Import useContext from React
import { nameContext } from "./Ref"; // Import context

function Hen() {
    const Count = useContext(nameContext); // Consume the context

    if (Count % 2 === 0) { // Check if Count is even
        return (
            <>
                <p>Hi boy</p>
            </>
        );
    } else {
        return (
            <>
                <p>Bye</p>
            </>
        );
    }
}

export default Hen;
