import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartData } from "./Data";
import zoom from "chartjs-plugin-zoom";
import { useEffect, useState } from "react";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoom
);

const LineGraph = ({ andriod, iphone }) => {
  const [Data, setData] = useState(() => ChartData);
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
      setData(ChartData);
    }
  }, [andriod, iphone]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales",
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

  return <Line options={options} data={Data} />;
};

export default LineGraph;
