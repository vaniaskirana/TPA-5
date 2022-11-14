import { ADD_TODO, REMOVE_TODO, UPDATE_CHECKBOX, UPDATE_TODO } from "../actions";


const initialState = [];

export const operationsReducers = (state=initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload];
        case REMOVE_TODO:
            const filterTodo = state.filter((todo)=> todo.id !== action.payload)
            return filterTodo;
        case UPDATE_TODO:
            let data = action.payload
            const updatedArray = []
            state.map((item) => {
                if(item.id === data.id){
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed;
                }
                updatedArray.push(item)
            })
            return updatedArray;
        case UPDATE_CHECKBOX:
            let todoArray = []
            state.map((item) => {
                if(item.id === action.payload){
                    item.completed = !item.completed;
                }
                todoArray.push(item);
            })
            return todoArray
        default: return state;
    }
}