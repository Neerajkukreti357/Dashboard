export const ChartData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "I Phones",
      data: [30, 40, 20, 10, 50, 60, 70, 80, 90, 35, 25, 20],
      borderColor: "rgb(75,192,192)",
    },
    {
      label: "Andriod",
      data: [10, 50, 40, 100, 55, 65, 72, 85, 99, 75, 65, 25],
      borderColor: "rgba(255, 0, 0, 1)",
    },
  ],
};

export const BarChartData = {
  labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
  datasets: [
    {
      label: "I Phones",
      data: [130, 140, 120, 270, 380, 325, 320],
      borderColor: "rgb(75,192,192)",
      backgroundColor: ["rgba(255,99,132,0.8)"],
    },
    {
      label: "Andriod",
      data: [400, 555, 665, 485, 399, 475, 625],
      backgroundColor: ["rgba(25,99,32,0.8)"],
      borderColor: "rgba(255, 0, 0, 1)",
    },
  ],
};

export const RadarChartData = {
  labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
  datasets: [
    {
      label: "I Phones",
      data: [30, 40, 20, 20, 30, 35, 32],
      borderColor: "rgb(75,192,192)",
      backgroundColor: ["rgba(255,99,132,0.4)"],
    },
    {
      label: "Andriod",
      data: [40, 55, 66, 85, 39, 75, 65],
      backgroundColor: ["rgba(25,99,32,0.8)"],
      borderColor: "rgba(255, 0, 0, 1)",
    },
  ],
};

export const Doughnutdata = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Sales",
      data: [650, 590, 800, 810, 560, 550, 900, 1000, 400, 500, 200, 1200],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
        "rgba(255, 99, 100, 0.5)",
        "rgba(25, 100, 11, 0.5)",
        "rgba(55, 90, 13, 0.5)",
        "rgba(205, 121, 102, 0.5)",
        "rgba(215, 92, 122, 0.5)",
        "rgba(225, 40, 132, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(255, 99, 100, 1)",
        "rgba(25, 100, 11, 1)",
        "rgba(55, 90, 13, 1)",
        "rgba(205, 121, 102, 1)",
        "rgba(215, 92, 122, 1)",
        "rgba(225, 40, 132, 1)",
      ],
      borderWidth: 2,
    },
  ],
};
