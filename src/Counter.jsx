import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count+1;
        setCount(newCount)
    }



    const counterStyle={
        border: "2px solid blue",
        padding: "20px",
        width:"80%",
        margin:"0 auto"
    }

    return(
        <div style={counterStyle}>
            <h2>
                Count: {count} 
            </h2>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}