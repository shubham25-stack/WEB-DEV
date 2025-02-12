import { useEffect, useState } from "react";

function TodoA() {
    const count = 4;
    const [todos, setTodos] = useState([{
        id: 1,
        title: "Go to school",
        description: "Go to school today"
    },
    {
        id: 2,
        title: "Go to GYM",
        description: "Go to Gym today"
    },
    {
        id: 3,
        title: "Go to college",
        description: "Go to college tommorow"
    }])


    //this is an connecting to backend function algo
    // useEffect(() =>{
    //     setTimeInterval(() =>{
    //    fetch("https://sum-server.100xdevs.com./todos")
    //     .then(async function (res) {
    //         const json = await res.json();
    //         setTodos(json.todos);
    //     })
    //    },10000)
    // }, [])

    //on adding time interval the things will fetch in every
    // specific time interval in this case it calls the things as every 10 seconds
    



    function addTodo() {
        setTodos([...todos, { //using spread thread.
            // id:count++,
            title: Math.random(),
            description: Math.random()
        }])
        // const newTodos = [];
        // for (let i = 0; i < todos.length; i++) {
        //     newTodos.push(todos[i]);
        // }
        // //new todo == old todo
        // newTodos.push({
        //     id: 4,
        //     title: Math.random(),
        //     description: Math.random()
        // })
        // setTodos(newTodos)
    }

    return (
        <div>
            <button onClick={addTodo}>Add a Todo</button>
            <br />
            {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
            
        </div>
    )
}

function Todo({ title, description }) {
    return <div>
        <h1> {title} </h1>
        <h5>{description}</h5>
    </div>
}

export default TodoA;