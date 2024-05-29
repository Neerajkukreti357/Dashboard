import DigitSection from "../DigitSection/DigitSection";
import Charts from "../Charts/Charts";
import Navigation from "../navigation/Navigation";
import { useState } from "react";

const Dashboard = () => {
  const [andriod, setAndriod] = useState(false);
  const [iphone, setIphone] = useState(false);
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("2018");
  const [startMonth, setStartMonth] = useState("");
  const [endMonth, setEndMonth] = useState("");

  const handleOnchange = (e) => {
    switch (e.target.id) {
      case "andriod":
        setAndriod((p) => e.target.checked);
        break;
      case "iphone":
        setIphone((p) => e.target.checked);
        break;
      case "yearStart":
        setStartYear((p) => e.target.value);
        break;
      case "yearEnd":
        setEndYear((p) => e.target.value);
        break;
      case "monthStart":
        setStartMonth((pv) => e.target.value);
        break;
      case "monthEnd":
        setEndMonth((pv) => e.target.value);
        break;
      default:
        console.log("Something went wrong");
        break;
    }
  };
  return (
    <>
      <Navigation handleOnchange={handleOnchange} />
      <DigitSection />
      <Charts
        andriod={andriod}
        iphone={iphone}
        startYear={startYear}
        endYear={endYear}
        startMonth={startMonth}
        endMonth={endMonth}
      />
    </>
  );
};

export default Dashboard;
