import { combineReducers } from "redux";

import filtersReducer from "../components/Filters/filtersSlice";
import todoListReducer from "../components/TodoList/todoSlice";


const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
})

export default rootReducer;