import useStats from "../utils/useStats";
import React from "react";

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  console.log(stats, loading, error);
  if (loading)
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  if (error) return <p>Error...</p>;
  return (
    <div className="row my-5">
      <div className="col card">
        <h3 className="card-title">Casi confermati:</h3>
        <span className="card-text">{stats.confirmed.value}</span>
      </div>
      <div className="col card">
        <h3 className="card-title">Morti:</h3>
        <span>{stats.deaths.value}</span>
      </div>
      <div className="col card">
        <h3 className="card-title">Guariti:</h3>
        <span>{stats.recovered.value}</span>
      </div>
    </div>
  );
}
