import React from "react";
import Text from "../atoms/Text";

export default function StatsGroup({ stats }) {
  return (
    <>
      <Text>Total: {stats.total}</Text>
      <Text>Completed: {stats.completed}</Text>
    </>
  );
}
