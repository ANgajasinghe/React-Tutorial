// useState is a Hook 
import React, { useState } from 'react';


const Todo = prop => {

    // this will take initial state

    // useState -02
    const [todoName, setTodoName] = useState('');
    // useState -03
    const [todoList, setTodoList] = useState([]);



    const [todoState, setTodoState] = useState({ userInput: '', todoList: [] })


    const inputChangeHandler = (event) => {
        setTodoState({ 
            userInput: event.target.value,
            todoList: todoState.todoList 
            });
        console.log(todoName);
    }

    const todoAddHanddler = () => {
        setTodoState({ 
            userInput: todoState.userInput,
            todoList: todoState.todoList.concat(todoState.userInput) 
            });
        console.log(todoList);
    }

    // Like Aux allow us to return top level  
    return <React.Fragment>
        <input type="text" placeholder="Todo" onChange={inputChangeHandler} value={todoState.userInput} />
        <button type="button" onClick={todoAddHanddler}> Add </button>

        <ul>
            {todoState.todoList.map(item =>
            (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </React.Fragment>
}

export default Todo;