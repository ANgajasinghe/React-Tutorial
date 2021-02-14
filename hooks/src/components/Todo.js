// useState is a Hook 
import React , {useState} from 'react';


const Todo = prop => {

    // this will take initial state
    const inputState = useState('');


    const inputChangeHandler = (event) => {
        inputState[1](event.target.value)
        console.log(inputState);
    }

        // Like Aux allow us to return top level  
    return <React.Fragment>
        <input type="text" placeholder="Todo" onChange={inputChangeHandler}  value={inputState[0]}/>
        <button type="button"> Add </button>

        <ul>

        </ul>
    </React.Fragment>
}

export default Todo;