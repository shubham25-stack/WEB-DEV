import Render from "./components/Render";
import PushState from "./components/PushState";
import Memo from "./components/Memo";
import TodoA from "./components/TodoA";
import CardWrapper from "./components/CardWrapper";
import Use from "./components/Use";
import State from "./components/State";

function App() {
    return (
      <>
      <CardWrapper></CardWrapper>
      <br />
      <br />
      <Use></Use>
      <br />
      <State></State>
      </>
    )
}
// {/* <Render></Render>
//       <br />
//       <br />
//       <PushState></PushState>
//       <br />
//       <br />
//       <Memo></Memo>
//       <br />
//       <br />
//       <TodoA></TodoA> */}

export default App;
