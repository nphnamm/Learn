// export const todoListSelector = (state) => {

import { createSelector } from "reselect";

//     const searchText = searchTextSelector(state);
//     const todosRemaining = state.todoList.filter((todo) => {
//       return todo.name.includes(state.filters.search);
//     });
//     return todosRemaining;
// };

// export const searchTextSelector = (state) => state.filters.search;
export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList ;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
console.log('check ', filterPrioritiesSelector);

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesSelector,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        ( status === "Completed"
          ? todo.completed
          : !todo.completed) && (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);


