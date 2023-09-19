import { useState } from "react";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setActiveFilter } from "../../redux/features/filterSlice";

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const Filters = () => {
    const [filter, setFilter] = useState("all");
    const dispatch = useDispatch<AppDispatch>();

    const setStylesBtn = (value: string) => value === filter ? "contained" : "outlined"; 

    const onFilter = (value: string) => {
        setFilter(value);
        dispatch(setActiveFilter(value));
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <ButtonGroup aria-label="outlined button group">
                <Button variant= {setStylesBtn("all")} onClick={() => onFilter("all")}>All</Button>
                <Button variant= {setStylesBtn("active")} onClick={() => onFilter("active")}>Active</Button>
                <Button variant= {setStylesBtn("completed")} onClick={() => onFilter("completed")}>Completed</Button>
            </ButtonGroup>
        </Box>
    );

}

export default Filters;
