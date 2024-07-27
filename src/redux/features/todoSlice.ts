import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
    id: string;
    title: string;
    description: string;
    isCompleted?: boolean;
    priority?:string

}

type TinitialState = {
    todos:  TTodo[]
}


const initialState : TinitialState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo : (state, action : PayloadAction<TTodo>) =>{
            state.todos.push({...action.payload})
        },
        removeTodo : (state, action: PayloadAction<string>) => {
           state.todos = state.todos.filter((item) => item.id !== action.payload)
        },
        toggleAction : (state, action: PayloadAction<string>) => {
            const task = state.todos.find(item => item.id === action.payload)
            task!.isCompleted = !task?.isCompleted
        }
    }
})

export const {addTodo, removeTodo, toggleAction} = todoSlice.actions
export default todoSlice.reducer