import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import SideBar from "./SideBar";

const Navigation = ({ handleOnchange }) => {
  const [toggleSidebar, setSidebar] = useState(false);

  const handleClick = () => {
    setSidebar((preValue) => !preValue);
  };

  return (
    <>
      <nav className="navbar text-bg-dark">
        <div className="container-fluid">
          <div>
            {!toggleSidebar ? (
              <CiMenuFries
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
                onClick={handleClick}
              />
            ) : (
              <IoMdClose
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
                onClick={handleClick}
              />
            )}
          </div>
          <a className="navbar-brand ml-auto mr-auto text-white" href="#">
            DASHBOARD
          </a>
        </div>
      </nav>
      <SideBar toggleSidebar={toggleSidebar} handleOnchange={handleOnchange} />
    </>
  );
};

export default Navigation;
