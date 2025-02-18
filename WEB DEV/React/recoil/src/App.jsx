import './App.css';
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count"; // Correct import path for atom

function App() {
  return (
    <div>
      <Count />
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRender />
      <Buttons />
    </div>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom); // Use useRecoilValue to get the state value

  return (
    <div>
      <b>{count}</b>
    </div>
  );
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom); // useRecoilState to read and update state

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
