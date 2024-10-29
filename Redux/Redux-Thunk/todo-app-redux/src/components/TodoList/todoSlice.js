// const initState = [
//     { id: 1, name: "Learn Typescript", completed: true, priority: "Medium" },
//     { id: 2, name: "Learn Redux", completed: false, priority: "Medium" },
//     { id: 3, name: "Learn React", completed: false, priority: "Medium" },
//   ]
// const todoListReducer = (state = initState, action) => {
//   /*
//         { 
//         type: 'todolist/addTodo,
//         payload:{ id: 3, name: "Learn React", completed: false, priority: "Medium" },

//         }
    
//     */
//   console.log("state, action", { state, action });
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state.todoList, action.payload];
//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );

//     default:
//       return state;
//   }
// };
// export default todoListReducer;


import { createSlice } from "@reduxjs/toolkit";
import { toggleTodoStatus } from "../../redux/actions";


export default createSlice({
  name:'todoList',
  initialState: [
        { id: 1, name: "Learn Typescript", completed: true, priority: "Medium" },
        { id: 2, name: "Learn Redux", completed: false, priority: "Medium" },
        { id: 3, name: "Learn React", completed: false, priority: "Medium" },
  ],
  reducers:{
    addTodo: (state, action) => {
      state.push(action.payload);

    },
    toggleTodoStatus: (state,action)=>{
       const currentTodo = state.find(todo => todo.id ===action.payload)
      if(currentTodo){

        currentTodo.completed = !currentTodo.completed;
      }
    }
  }

  
});
