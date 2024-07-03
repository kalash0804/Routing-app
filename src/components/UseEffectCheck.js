import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const UseEffectCheck = () => {


    let [counter,setCounter] = useState(0);
    let [myColor,setMycolor] =useState("cyan");
    let [myname,setMyname] = useState("Virat");
    let [mycity,setmyCity] = useState("Hyd");


    //called on component mount/load
    // Also called on stateChange
    // componentWillMount and componentDidUpdate
    useEffect(() => {
        console.log("hello from useEffect, I will be called all the time!");
        setMycolor( (counter%2 == 0 )? "lightblue": "pink");
    });


    //second param is empty, is called only once , when the component loads/mounts
    // getting information needed to render, API calls - fetch or axios
    // componentWillMount
    useEffect(() => {
        console.log("hello from second useEffect, with empty array!");
    },[]);


    useEffect(() => {
        console.log("hello from third useEffect, with myname and mycity dependencies in array!");
    },[myname,mycity]);




    let incrementHandler = () =>{
        setCounter(counter+1);              
    }


    let decrementHandler = () =>{
        setCounter(counter-1);
    }


    let nameHandler = () => {
        setMyname ((myname=="RohitSharma") ? "ViratKohli" : "RohitSharma");      
    }
    let cityHandler = () => {
        setmyCity ((mycity=="Hyd") ? "Bhilai" : "Hyd");      
    }


    return (
        <div style={{backgroundColor:myColor}}>
        <h1> Welcome to UseEffect check</h1>
        Value is {counter}
        Value is {myname}
        City is {mycity}
        <button onClick={incrementHandler}> Increment</button>
        <button onClick={decrementHandler}> decrement</button>
        <button onClick={nameHandler}> Change Name</button>
        <button onClick={cityHandler}> Change City</button>
        <Link to="/return"> Go to useeffect return check</Link>
        </div>
     );
}
 
export default UseEffectCheck;
