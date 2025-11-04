import StatsGroup from "../molecules/StatsGroup";
import Button from "../atoms/Button";

export default function StatsBar({ stats, clearAllTasks }) {
  return (
    <div className="stats-bar">
      <StatsGroup stats={stats} />
      <Button label="Clear All" onClick={clearAllTasks} />
    </div>
  );
}
