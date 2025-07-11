"use client";

export default function StatusFilter({ status, setStatus }) {
  const options = ["all", "pending", "confirmed", "completed", "cancelled"];

  return (
    <div className="mb-4">
      <label>Filter:</label>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border rounded p-2 text-sm"
      >
        {options.map((s) => {
          <option key={s} value={s}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </option>;
        })}
      </select>
    </div>
  );
}
