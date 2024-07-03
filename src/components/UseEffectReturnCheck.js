import { useEffect } from "react";
import { Link } from "react-router-dom";


const UseEffectReturnCheck = () => {


    useEffect(() =>{
        console.log(" in useffect, called all the time");        
    });


    useEffect(() =>{
        console.log(" in useffect, called once , because []");    
        // componentWillUnmount!!!
        return () =>{
            console.log(" in return of useeffect in UseEffectReturnCheck");
        }
    },[]);




    return (
        <>
        <h1> UseEffect return check. </h1>
        <h5> Check console</h5>
        <Link to="/"> Go to use effect check</Link>
        </>
     );
}
 
export default UseEffectReturnCheck;
