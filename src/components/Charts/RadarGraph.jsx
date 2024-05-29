import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { RadarChartData } from "./Data";
import { useEffect, useState } from "react";

// Register necessary components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title
);

const RadarGraph = ({ andriod, iphone, startYear, endYear }) => {
  const [Data, setData] = useState(() => RadarChartData);

  useEffect(() => {
    if (andriod && !iphone) {
      const newDataset = Data.datasets.filter(
        (item) => item.label === "Andriod"
      );
      setData({ ...Data, datasets: newDataset });
      return;
    }
    if (iphone && !andriod) {
      const newDataset = Data.datasets.filter(
        (item) => item.label === "I Phones"
      );
      setData({ ...Data, datasets: newDataset });
      return;
    }
    if ((andriod && iphone) || (!andriod && !iphone)) {
      setData(RadarChartData);
    }
  }, [andriod, iphone]);

  useEffect(() => {
    let indexOfStartYear = RadarChartData.labels.indexOf(startYear);
    let indexOfEndYear = RadarChartData.labels.indexOf(endYear);
    const newLabels = RadarChartData.labels.slice(
      indexOfStartYear,
      indexOfEndYear + 1
    );

    let newDataSet = RadarChartData.datasets.map((item) => {
      let newDataArray = item.data.slice(indexOfStartYear, indexOfEndYear + 1);
      return { ...item, data: newDataArray };
    });

    if (startYear !== "" && endYear !== "") {
      setData({
        ...RadarChartData,
        labels: newLabels,
        datasets: newDataSet,
      });
    }
  }, [startYear, endYear]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales Percentage (%)",
      },
    },

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return <Radar options={options} data={Data} />;
};

export default RadarGraph;
