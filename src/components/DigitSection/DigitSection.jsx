import style from "./DigitSection.module.css";

const DigitSection = () => {
  const Info = [
    { heading: "Total Sales", count: 230, percentage: 20 },
    { heading: "Sales Growth", count: 430, percentage: -10 },
    { heading: "Top Selling Product Quantity", count: 830, percentage: 15 },
    { heading: "Customer Count", count: 3330, percentage: 20 },
  ];
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1 p-2 ${style["digitSection"]}`}
    >
      {Info.map((item, index) => {
        return (
          <div key={index} className={`bg-white h-[15rem] `}>
            <h4>{item.heading}</h4>
            <div className={`w-ful leading-[1rem] ${style["para"]}`}>
              <p className="text-3xl font-serif font-semibold">{item.count}</p>
              <p
                className={
                  item.percentage > 0 ? `text-green-500` : `text-red-600`
                }
              >
                {item.percentage > 0
                  ? `+` + item.percentage + "%"
                  : item.percentage + "%"}
              </p>
              <p className="text-sm">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DigitSection;
