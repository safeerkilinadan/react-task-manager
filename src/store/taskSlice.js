import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filter: "all",
  search: "",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        title: action.payload,
        status: "todo",
      });
    },
    updateTaskStatus: (state, action) => {
      const { id, newStatus } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) task.status = newStatus;
    },
    clearAllTasks: (state) => {
      state.tasks = [];
      localStorage.removeItem("tasks");
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setTasksFromStorage: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const {
  addTask,
  updateTaskStatus,
  clearAllTasks,
  setFilter,
  setSearch,
  setTasksFromStorage,
} = taskSlice.actions;

export default taskSlice.reducer;

/* ---------------------------
   🔍 Selectors
---------------------------- */

// Simple selectors
export const selectTasks = (state) => state.tasks.tasks;
export const selectFilter = (state) => state.tasks.filter;
export const selectSearch = (state) => state.tasks.search;


// Memoized selector for filtered tasks
export const selectFilteredTasks = createSelector(
  [selectTasks, selectFilter, selectSearch],
  (tasks, filter, search) => {
    return tasks.filter((task) => {
      const matchesFilter = filter === "all" || task.status === filter;
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }
);

// Memoized selector for stats
export const selectStats = createSelector([selectTasks], (tasks) => ({
  total: tasks.length,
  completed: tasks.filter((t) => t.status === "done").length,
}));

