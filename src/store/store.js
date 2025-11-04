import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

// 🧠 Load from localStorage on startup
const savedTasks = localStorage.getItem("tasks");
if (savedTasks) {
  const tasks = JSON.parse(savedTasks);
  store.dispatch({ type: "tasks/setTasksFromStorage", payload: tasks });
}

// 💾 Subscribe to store updates and persist to localStorage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("tasks", JSON.stringify(state.tasks.tasks));
});

export default store;
