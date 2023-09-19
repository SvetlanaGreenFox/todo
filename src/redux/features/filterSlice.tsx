import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const initialState: string = "all";
interface FilterState {
    value: string
}

// Define the initial state using that type
const initialState: FilterState = {
    value: "all"
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        // setActiveFilter(state, action: PayloadAction<string>) {
        //     state = action.payload;
        // }
        setActiveFilter: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
});

export const { setActiveFilter } = filterSlice.actions;
export default filterSlice.reducer;