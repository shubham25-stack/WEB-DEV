import { useEffect, useState, useMemo } from "react";

function State() {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);
    const [count,setCount] = useState(0);

    useEffect(() =>{
        let finalCount =0;
        for(let i =1; i<=inputValue; i++){
            finalCount = finalCount + i;
        }
        setCount(finalCount);
    }, [inputValue])

    // Convert inputValue to a number before using it
    // const count = useMemo(() => {
    //     let finalCount = 0;
    //     const numValue = Number(inputValue); // Convert to number
    //     for (let i = 1; i <= numValue; i++) {
    //         finalCount = finalCount + 1;
    //     }
    //     return finalCount;
    // }, [inputValue]);/



    return (
        <div>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Find sum from 1 to n" 
            />
            <br />
            Sum from 1 to {inputValue} is {count}
            <br />
            <button onClick={() => setCounter(counter + 1)}>
                Counter ({counter})
            </button>
        </div>
    );
}

export default State;
