import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import TodoItemProps from "../../types/todo";
import { Todo } from "../../models";
import { v4 as uuidv4 } from "uuid";

const initialState = [] as Todo[];

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action: PayloadAction<Todo>) => {
                state.push(action.payload);
            },
            prepare: (name: string, description: string) => ({
                payload: {
                    id: uuidv4(),
                    name,
                    description,
                    checked: false,
                } as Todo,
            }),
        },

        removeTodo(state, action: PayloadAction<string>) {
            const index = state.findIndex((todo) => todo.id === action.payload);
            state.splice(index, 1);
        },

        setTodoStatus(
            state,
            action: PayloadAction<{ checked: boolean, id: string }>
        ) {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].checked = action.payload.checked;
        },
    },
});

export const { addTodo, removeTodo, setTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;
