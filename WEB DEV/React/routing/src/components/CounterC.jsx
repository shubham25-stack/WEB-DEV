import React, { useState, createContext, useContext } from "react";

const CountContext = createContext();

function CountProvider({ children }) {
    const [count, setCount] = useState(0);
    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    );
}

function CounterC() {
    return (
        <CountProvider>
            <div>
                <Buttons />
                <Count />
            </div>
        </CountProvider>
    );
}

function Count() {
    const { count } = useContext(CountContext);
    return (
        <div>
            <CountRender count={count} />
        </div>
    );
}

function CountRender({ count }) {
    return <div>{count}</div>;
}

function Buttons() {
    const { count, setCount } = useContext(CountContext);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
}

export default CounterC;
