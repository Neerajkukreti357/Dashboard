const SideBar = ({ toggleSidebar, handleOnchange }) => {
  let value = !toggleSidebar ? `translateX(-100%)` : `translateX(0%)`;
  const monthNames = [
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
  ];
  const years = [2012, 2013, 2014, 2015, 2016, 2017, 2018];

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark position-absolute"
      style={{
        height: "100vh",
        width: "280px",
        transform: value,
        transition: "all 0.3s ease-in-out",
      }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4 ml-20">FILTERS</span>
      </a>
      <hr />
      <ul
        className="nav nav-pills flex-column mb-auto mt-8"
        onChange={handleOnchange}
      >
        <li className="nav-item" style={{ display: "flex", gap: "30px" }}>
          Andriod : <input type="checkbox" value="Andriod" id="andriod" />
          Iphone : <input type="checkbox" value="Iphone" id="iphone" />
        </li>
        <li
          className="nav-item mt-10"
          style={{ display: "flex", gap: "10px", flexDirection: "column" }}
        >
          <p className="mb-1">Filter For years :</p>
          Start :
          <select className="text-black" id="yearStart">
            <option value="">Select...</option>
            {years.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </li>
        <li
          style={{ display: "flex", gap: "10px", flexDirection: "column" }}
          id="month"
        >
          END :
          <select className="text-black" id="yearEnd">
            <option value="">Select...</option>
            {years.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </li>
        <li
          className="nav-item mt-10"
          style={{ display: "flex", gap: "10px", flexDirection: "column" }}
        >
          <p className="mb-1">Filter For Months:</p>
          Start :
          <select className="text-black" id="monthStart">
            <option value="">Select...</option>
            {monthNames.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </li>
        <li style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          END :
          <select className="text-black" id="monthEnd">
            <option value="">Select...</option>
            {monthNames.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default SideBar;
