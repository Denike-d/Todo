import React from 'react'
import {useState} from 'react'

function TodoList () {
    
    const [toDoList, setTodoList] = useState([]);


    const todo = (userInput) => {
       let addTodo = [...toDoList];
        addTodo.push({id: userInput.length + 1, task: userInput });
        setTodoList(addTodo); 
        console.log("I work!")
    }

    return (
        <div>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}


export default TodoList;