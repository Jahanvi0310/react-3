import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../reducer/TodoSlice'

export default configureStore({
    reducer:{
        tasks: taskReducer,
    }
});