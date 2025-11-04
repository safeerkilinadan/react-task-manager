import FilterGroup from "../molecules/FilterGroup";

export default function FilterBar(props) {
  return (
    <div className="filter-bar">
      <FilterGroup {...props} />
    </div>
  );
}
