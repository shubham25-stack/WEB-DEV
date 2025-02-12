import { useEffect, useState } from "react";

function Use() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        alert(counter);
    }, [counter]);

    return (
        <div>
            <button onClick={() => {
                setCounter(counter + 1);  // Corrected this line
            }}>
                Increase Count
            </button>
        </div>
    );
}

export default Use;
