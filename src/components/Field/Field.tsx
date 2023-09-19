import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { addTodo, removeTodo, setTodoStatus } from "../../redux/features/todoSlice";

import { Paper, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const DEFAULT_TODO = {
    name: "",
    description: ""
};

const Field = () => {
    const [todo, setTodo] = useState(DEFAULT_TODO);
    const dispatch = useDispatch<AppDispatch>();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setTodo({...todo, [name]: value});
    }

    const onClick=() => {
        dispatch(addTodo(todo.name, todo.description));
        setTodo({...todo, name: "", description: ""});
    };

    return (
        <Paper elevation={1}
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center',
                gap: 2,
                padding: '15px 10px',
                marginBottom: "15px",
                borderRadius: 2,
            }} >
            <TextField id="outlined-basic" value={todo.name} onChange={onChange} name="name" label="Task Name" variant="outlined" fullWidth />
            <TextField id="outlined-basic" value={todo.description} onChange={onChange} name="description" label="Task Description" variant="outlined" fullWidth />
            <Button
                sx={{ height: 1 }} 
                variant="contained" 
                color='success' 
                startIcon={<AddIcon />}
                onClick={ onClick }>
                Add
            </Button>
        </Paper>
    )
};

export default Field;
