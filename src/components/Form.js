import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, handleEditSubmit } from "../redux/actions";


export const Form = ({updateFormVisibility, editTodo, cancelUpdate}) => {
    const dispatch = useDispatch();

    const [todoValue, setTodoValue] = useState('')

    const [editValue, setEditValue] = useState('')
    useEffect(() => {
        setEditValue(editTodo.todo)
    }, [editTodo])

    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date()
        let time = date.getTime()
        let todoObj={
            id: time,
            todo: todoValue,
            completed: false
        }
        setTodoValue('')
        dispatch(addTodo(todoObj))
    }

    const editSubmit = (e) => {
        e.preventDefault()
        let editedObj = {
            id: editTodo.id,
            todo: editValue,
            completed: false
        }
        dispatch(handleEditSubmit(editedObj))
    }

    return(
        <><br/><br/>
        
            {updateFormVisibility === false?(
                
                    <form className='row form-group formutama' onSubmit={handleSubmit}>
                    
                    <h5>Created by : Vania S</h5>
                    <div className='col text-center btnAddUp'>
                        <input type="text" placeholder='Add new' className='form-control form-control-lg' required
                        value={todoValue} onChange={(e)=>setTodoValue(e.target.value)}/>
                        <button type="submit" className='btn btn-secondary btn-md upcel'>Add</button>
                    </div>
                    <br></br><br></br><br></br>
                    </form>  
                    

            ):(
                    <form className='form-group text-center custom-form btnAddUp' onSubmit={editSubmit}>
                    <label>Update your todo-items</label>
                    <div className='input-and-btn'>
                        <input type="text" className='form-control' required
                        value={editValue||""} onChange={(e) => setEditValue(e.target.value)}/>
                        <button type="submit" className='col btn btn-secondary btn-md btnAddUp upcel'>Update</button>
                   
                    <button type="button" 
                    className="col btn btn-primary btn-md back-btn btnAddUp upcel"
                    onClick={cancelUpdate}>Cancel</button>
                     </div>
                    </form>  

            )}
        </>
    )
}