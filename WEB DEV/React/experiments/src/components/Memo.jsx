import React,{Fragment} from "react";
import { useState } from "react";
function Memo(){
    const [title, setTitle] = useState("shiv");
    // const [randomTitle, setRandomTitle] = useState("My name is Shiv");
  
    function updateTitle() {
      setTitle("My name is " + Math.random());
    }
  
    return (
      <>
        <button onClick={updateTitle}>Update the title</button>
        <Header title={title} />
        <Header title="Shiv" /> 
        <Header title="Heading 1" />
        <Header title="Heading 2" />
        <Header title="Heading 2" />
      </>
    )
  }
  
  const Header = React.memo(function Header({ title }) {
    return <div>{title}</div>;
  })
  

  export default Memo;