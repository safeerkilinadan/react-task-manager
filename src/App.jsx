import React, { useEffect } from "react";
import DashboardPage from "./components/pages/DashboardPage";
import { useDispatch, useSelector } from "react-redux";
import { setTasksFromStorage } from "./store/taskSlice";
import "./styles/styles.css";

export default function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  // 🟢 Load tasks from localStorage on app start
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      dispatch(setTasksFromStorage(JSON.parse(saved)));
    }
  }, [dispatch]);

  // 💾 Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return <DashboardPage />;
}
