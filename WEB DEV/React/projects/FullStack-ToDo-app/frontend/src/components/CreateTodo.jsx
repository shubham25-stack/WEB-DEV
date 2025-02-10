import styles from "./CreateTodo.css";
function CreateTodo(){
    return(
    <div>
        <input type="text" placeholder="Title"></input> <br /><br />
        <input type="text" placeholder="Description"></input><br /><br />

        <button className="btn">Add a Todo</button>
    </div>

    )
};

export default CreateTodo