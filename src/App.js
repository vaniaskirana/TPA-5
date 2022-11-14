import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from './components/Form';
import { Todos } from './components/Todos';
import { useState } from 'react';
// import { useSelector } from 'react-redux';

function App() {
  const [updateFormVisibility, setupdateFormVisibility] = useState(false)
  
  const [editTodo, setEditTodo] = useState('')
  
  const handleUpdateClick = (todo) => {
    setupdateFormVisibility(true)
    setEditTodo(todo)
  }


  const cancelUpdate = () => {
    setupdateFormVisibility(false);
  }

  return (
    <>
      <div className='wrapper text-center formutama dataBg'>
        <br/>
        <h1 className='text-center'>Todo-App</h1>
        <img src="/img/reduxIco.png" width={300} />
        <Form updateFormVisibility={updateFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate}/>
        <Todos handleUpdateClick={handleUpdateClick} updateFormVisibility={updateFormVisibility}/>
      </div>  
    </>
  );
}

export default App;
