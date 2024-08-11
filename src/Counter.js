import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    function incrCount(){
        setCount(count+1);
    }
    
    function decrCount(){
        setCount(count-1);
    }


    return (<div>
        <h1>{count}</h1>
        <button onClick={decrCount}>Decrement Count</button>
        <button onClick={incrCount}>Increment Count</button>
    </div>)
}

export default Counter;