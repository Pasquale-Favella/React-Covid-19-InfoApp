import React from "react";
import { Line } from "react-chartjs-2";
import useStats from "../utils/useStats";

export default function Chart({ url }) {
  const chartData = { labels: [], datasets: [] };
  const { stats, loading, error } = useStats(url);

  let deltaConfirmed = [];
  let deltaRecovered = [];
  let totalConfirmed = [];
  let datas = [];
  for (const a in stats) {
    console.log(a);
    Object.entries(stats).map(valore => {
      console.log(valore[1]);
      if (valore[1]["deltaRecovered"] === null) valore[1]["deltaRecovered"] = 0;
      deltaRecovered.push(valore[1]["deltaRecovered"]);
      totalConfirmed.push(valore[1]["totalConfirmed"]);
      deltaConfirmed.push(valore[1]["deltaConfirmed"]);
      datas.push([valore[1]["reportDateString"]]);
      return 0;
    });
    if (true) break;
  }

  chartData.datasets.push({
    label: "Guariti",
    backgroundColor: "green",
    borderColor: "green",
    fill: false,
    fillColor: "rgba(240, 52, 52, 1)",
    strokeColor: "rgba(100,0,0,0.5)",
    highlightFill: "rgba(100,100,100,0.5)",
    highlightStroke: "rgba(100,100,100,0.5)",
    data: deltaRecovered
  });
  chartData.datasets.push({
    label: "Contratto il virus",
    backgroundColor: "orange",
    borderColor: "orange",
    fill: false,
    fillColor: "rgba(240, 52, 52, 1)",
    strokeColor: "rgba(240, 52, 52, 1)",
    highlightFill: "rgba(240, 52, 52, 1)",
    highlightStroke: "rgba(240, 52, 52, 1)",
    data: deltaConfirmed
  });
  chartData.datasets.push({
    label: "Ammalati",
    backgroundColor: "red",
    borderColor: "red",
    fill: false,
    fillColor: "rgba(240, 52, 52, 1)",
    strokeColor: "rgba(240, 52, 52, 1)",
    highlightFill: "rgba(240, 52, 52, 1)",
    highlightStroke: "rgba(240, 52, 52, 1)",
    data: totalConfirmed
  });

  for (let i = 0; i < datas.length; i++) {
    chartData.labels.push([datas[i]]);
  }
  if (loading)
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  if (error) return <p>Error...</p>;

  return <Line className="mb-5" data={chartData}></Line>;
}
