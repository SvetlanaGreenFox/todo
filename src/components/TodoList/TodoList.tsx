import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { addTodo, removeTodo, setTodoStatus } from "../../redux/features/todoSlice";

import { Todo } from "../../models";
import TodoItem from './TodoItem/TodoItem';

import { Box } from '@mui/material';
import { useState, useEffect } from "react";

const TodoList = () => {
    
    const todos = useSelector((state: RootState) => state.todos);
    const { value: activeFilter} = useSelector((state: RootState) => state.filter);

    const [filteredTodos, setFilteredTodos] = useState(todos);

    const todoFilter = (status: string) => {
        if (status === "active") {
            let filtered = [...todos].filter(item => item.checked === false);
            setFilteredTodos(filtered);
        } else if(status === "completed") {
            let filtered = [...todos].filter(item => item.checked === true);
            setFilteredTodos(filtered);
        } else {
            setFilteredTodos(todos);
        }
    }
    

    useEffect(() => {
        todoFilter(activeFilter);
    }, [todos, activeFilter]);
    
    console.log(filteredTodos);
    return (
        <Box
            sx={{
                width: '500px',
            }}
            display="flex"
            flexDirection="column">
                
                {filteredTodos.map((todo: Todo) => 
                    <TodoItem key={todo.id} item={todo}/>
                )}
        </Box>
    )
};

export default TodoList;
