const { useState, default: React } = require("react")

function CostomHooks(){
    const [count,setCount] = useState(0);

    return <div>
        <Child />
        <button onClick={() => setCount(count+1)}>Hii People</button>
    </div>
}

class Child extends React.Component {
    render(){
        const { label, score = 0, total = Math.max(1, score)} = this.props;
        console.log("rerender start");
        return (
            <div>
                <h6 >{label}</h6>
                <span>{Math.round(score/total * 100)}%</span>
            </div>
        )
    }
}

export default CostomHooks;