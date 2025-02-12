import { useState } from "react";
function PushState(){
    return (
      <>
        <HeaderWithButton></HeaderWithButton>        <Header title="Shiv" /> 
        <Header title="Heading 1" />
        <Header title="Heading 2" />
        <Header title="Heading 2" />
      </>
    )
  }

  function HeaderWithButton(){
    const [title, setTitle] = useState("My name is Shiv");
    // const [randomTitle, setRandomTitle] = useState("My name is Shiv");
  
    function updateTitle() {
      setTitle("My name is " + Math.random());
    }
    return <div>
        <button onClick={updateTitle}>Update the title</button>
        <Header title={title}></Header>
    </div>
  }
  
  function Header({ title }) {
    return <div>{title}</div>;
  }

  export default PushState;