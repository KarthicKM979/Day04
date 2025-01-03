import { useContext } from "react";
import { nameContext } from "./Ref";
function Stomach(need4){
    let name=useContext(nameContext)
    return(
        <>
        <h3>Stomach: {need4.need3}</h3>
        <h3>Contaxt : {name}</h3>
        

        
        </>
    )
}
export default Stomach;