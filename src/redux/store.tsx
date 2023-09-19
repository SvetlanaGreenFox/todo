import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "./features/todoSlice";
import filterReducer from "./features/filterSlice";
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({ todos: todoReducer, 
  filter: filterReducer })

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
