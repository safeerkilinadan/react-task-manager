import React from "react";
import Select from "../atoms/Select";
import Input from "../atoms/Input";

export default function FilterGroup({ filter, setFilter, search, setSearch }) {
  const options = [
    { label: "All", value: "all" },
    { label: "Todo", value: "todo" },
    { label: "In Progress", value: "in-progress" },
    { label: "Done", value: "done" },
  ];

  return (
    <>
      <Select value={filter} onChange={(e) => setFilter(e.target.value)} options={options} />
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tasks..."
      />
    </>
  );
}
