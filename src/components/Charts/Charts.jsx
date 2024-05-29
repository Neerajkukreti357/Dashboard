import style from "./Charts.module.css";
import LineGraph from "./LineGraph";
import BarChart from "./BarChart";
import RadarGraph from "./RadarGraph";
import DoughnutChart from "./DoughnutChart";

const Charts = ({
  andriod,
  iphone,
  startYear,
  endYear,
  startMonth,
  endMonth,
}) => {
  return (
    <div
      className={`grid xl:grid-cols-3 grid-cols-1 grid-rows-2 gap-1 p-2 xl:h-[40em] ${style["chartSection"]}`}
    >
      <div className="bg-white h-[400px] xl:h-full">
        <LineGraph andriod={andriod} iphone={iphone} />
      </div>
      <div className="bg-white xl:row-span-2 h-[400px] md:h-[400px] xl:h-full">
        <DoughnutChart startMonth={startMonth} endMonth={endMonth} />
      </div>
      <div className="bg-white xl:row-span-2 h-[400px] xl:h-full ">
        <RadarGraph
          andriod={andriod}
          iphone={iphone}
          startYear={startYear}
          endYear={endYear}
        />
      </div>
      <div className="bg-white xl:h-full h-[400px] md:h-[400px]">
        <BarChart
          andriod={andriod}
          iphone={iphone}
          startYear={startYear}
          endYear={endYear}
        />
      </div>
    </div>
  );
};

export default Charts;
