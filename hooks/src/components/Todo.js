// useState is a Hook 
import React , {useState} from 'react';


const Todo = prop => {

    // this will take initial state
    // useState -02
    const [todoName, setTodoName] = useState('');

    // useState -03
    const [todoList, setTodoList] = useState([]);

    const todoAddHanddler = () => {
        setTodoList(todoList.concat(todoName));
        console.log(todoList);
    }

    const inputChangeHandler = (event) => {
        setTodoName(event.target.value);
        console.log(todoName);
    }

        // Like Aux allow us to return top level  
    return <React.Fragment>
        <input type="text" placeholder="Todo" onChange={inputChangeHandler}  value={todoName}/>
        <button type="button" onClick={todoAddHanddler}> Add </button>

        <ul>
            {todoList.map(item=>
            (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </React.Fragment>
}

export default Todo;