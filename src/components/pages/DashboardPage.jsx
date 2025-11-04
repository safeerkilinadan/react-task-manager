import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DashboardTemplate from "../templates/DashboardTemplate";
import {
  addTask,
  updateTaskStatus,
  clearAllTasks,
  setFilter,
  setSearch,
  selectFilteredTasks,
  selectStats,
  selectFilter,
  selectSearch,
} from "../../store/taskSlice";

export default function DashboardPage() {
  const dispatch = useDispatch();

  const tasks = useSelector(selectFilteredTasks);
  const stats = useSelector(selectStats);
  const filter = useSelector(selectFilter);
  const search = useSelector(selectSearch);

  return (
    <DashboardTemplate
      tasks={tasks}
      addTask={(title) => dispatch(addTask(title))}
      updateTaskStatus={(id, newStatus) =>
        dispatch(updateTaskStatus({ id, newStatus }))
      }
      clearAllTasks={() => dispatch(clearAllTasks())}
      filter={filter}
      setFilter={(val) => dispatch(setFilter(val))}
      search={search}
      setSearch={(val) => dispatch(setSearch(val))}
      stats={stats}
    />
  );
}
