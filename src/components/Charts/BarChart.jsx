import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { BarChartData } from "./Data";
import zoom from "chartjs-plugin-zoom";
import { useEffect, useState } from "react";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  zoom
);

const BarChart = ({ andriod, iphone, startYear, endYear }) => {
  const [Data, setData] = useState(BarChartData);

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
      setData(BarChartData);
    }
  }, [andriod, iphone]);

  useEffect(() => {
    let indexOfStartYear = BarChartData.labels.indexOf(startYear);
    let indexOfEndYear = BarChartData.labels.indexOf(endYear);
    const newLabels = BarChartData.labels.slice(
      indexOfStartYear,
      indexOfEndYear + 1
    );

    let newDataSet = BarChartData.datasets.map((item) => {
      let newDataArray = item.data.slice(indexOfStartYear, indexOfEndYear + 1);
      return { ...item, data: newDataArray };
    });

    if (startYear !== "" && endYear !== "") {
      setData({
        ...BarChartData,
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
        text: "Yearly Sales",
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "x", // Enable zooming in both axes
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return <Bar options={options} data={Data} />;
};

export default BarChart;
