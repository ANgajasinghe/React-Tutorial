// useState is a Hook 
import React , {useState} from 'react';


const Todo = prop => {

    // this will take initial state
    // useState -02
    const [todoName, setTodoName] = useState('');


    const inputChangeHandler = (event) => {
        setTodoName(event.target.value);
        console.log(todoName);
    }

        // Like Aux allow us to return top level  
    return <React.Fragment>
        <input type="text" placeholder="Todo" onChange={inputChangeHandler}  value={todoName}/>
        <button type="button"> Add </button>

        <ul>

        </ul>
    </React.Fragment>
}

export default Todo;