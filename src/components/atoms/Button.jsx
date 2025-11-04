
export default function Button({ label, onClick, className = "" }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}
