//base
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { addTodo, removeTodo, setTodoStatus } from "../../../redux/features/todoSlice";

//types
import { Todo } from "../../../models";

//styles
import { Paper, Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';


interface TodoItemProps {
    item: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ item }) => {

    // const todo = useSelector((state: RootState) => state);

    const dispatch = useDispatch<AppDispatch>();

    return (
        <Paper elevation={1}
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                gap: 2,
                padding: "15px 10px",
                marginBottom: "10px",
                borderRadius: 2,
            }} >
            <Box display="flex">
                <Box
                    display="flex"
                    alignItems="center"
                    sx={{ marginRight: "10px" }}>
                    <Box>
                        <IconButton onClick={() => dispatch(setTodoStatus({ checked: !item.checked, id: item.id }))} aria-label="delete" color={item.checked ? "success" : "default"}>
                            {item.checked ? <CheckCircleOutlineIcon /> : <CircleOutlinedIcon />}
                        </IconButton>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" textAlign="left" sx={{ cursor: "pointer", marginRight: "10px" }}>
                    <Typography variant="h5" component="h5" sx={{ textDecorationLine: item.checked ? "line-through" : "none" }}>
                        {item.name.length > 0 ? item.name : "Task no named"}
                    </Typography>
                    <Typography variant="subtitle2" component="div" gutterBottom sx={{ opacity: item.checked ? "0.6" : "1", textDecorationLine: item.checked ? "line-through" : "none" }}>
                        {item.description.length > 0 ? item.description : "Would you like to add a description of the task"}
                    </Typography>
                </Box>
            </Box>

            <Box display="flex" alignItems="center" >
                <Box>
                    <IconButton onClick={() => dispatch(removeTodo(item.id))} aria-label="delete" color="error">
                        <DeleteIcon />
                    </IconButton>
                </Box>
                {/* <Box>
                    <IconButton aria-label="delete" color="primary">
                        <ModeIcon />
                    </IconButton>
                </Box> */}
            </Box>
        </Paper>
    )
};

export default TodoItem;
