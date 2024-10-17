import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        const newCount = count+1;
        setCount(newCount);
    }

    const reduceCount = () => {
        const newCount = count - 1
        setCount(newCount)
    }

    const counter = {
        padding: '16px',
        margin: '16px',
        border: '2px solid tomato', 
        borderRadius: '16px'
    }

    return (
        <div style={counter}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add Click</button>
            <button onClick={reduceCount}>Reduce Coun t</button>
        </div>
    )
}