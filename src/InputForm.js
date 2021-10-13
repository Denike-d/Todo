import React from 'react';
import {useState} from 'react';
import todo from './TodoLists'
    
function InputForm (props) {
    const [userInput, setUserInput] = useState("")


    const handleSubmit = (e) => {

        console.log("I am here!!!!!");

        todo(userInput);
        setUserInput(" ");
    };

    const handleChange = (e) => {

       console.log("I just changed");

       setUserInput(e.target.value);
    };

    return(
        <div>
          
            <ul>
                <li></li>
                </ul>
            <input value={userInput} onChange={handleChange} />
            <button onClick={handleSubmit} >Add Task</button>
            
        </div>
    )
}


export default InputForm