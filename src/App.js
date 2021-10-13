import React from 'react';
import './App.css';
import Header from './Header.js';
import InputForm from './InputForm';
import TodoList from './TodoLists'


function App() {
  
 
  return (
    <div className="App">

      <Header />
      <InputForm />
      <TodoList  />
    
   
    </div>
  );
}

export default App;
