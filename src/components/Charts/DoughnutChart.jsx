import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnutdata } from "./Data";
import { useState, useEffect } from "react";
// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const options = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Sales Distribution by Month" },
  },
};

const DoughnutChart = ({ startMonth, endMonth }) => {
  const [data, setData] = useState(() => Doughnutdata);

  useEffect(() => {
    let indexOfStartMonth = Doughnutdata.labels.indexOf(startMonth);
    let indexOfEndMonth = Doughnutdata.labels.indexOf(endMonth);
    const newLabels = Doughnutdata.labels.slice(
      indexOfStartMonth,
      indexOfEndMonth + 1
    );
    let newDataSet = Doughnutdata.datasets.map((item) => {
      let newDataArray = item.data.slice(
        indexOfStartMonth,
        indexOfEndMonth + 1
      );
      return { ...item, data: newDataArray };
    });
    if (startMonth !== "" && endMonth !== "") {
      setData({
        ...Doughnutdata,
        labels: newLabels,
        datasets: newDataSet,
      });
    }
  }, [startMonth, endMonth]);
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
