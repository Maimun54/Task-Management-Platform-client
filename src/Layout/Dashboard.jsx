

// import {  FaHome, FaList,   FaVoicemail } from "react-icons/fa";
// import { NavLink, Outlet } from "react-router-dom";

// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvide";


// const Dashboard = () => {

//     const {user} =useContext(AuthContext)
//     return (
//         <div className="flex">
//             {/* dashboard side bar */}
//             <div className="w-64 min-h-screen bg-orange-400">
//          <ul className="menu">
//           {
//             user?<>
//                    <li><NavLink to="/dashboard/adminHome">
//                 <FaHome></FaHome>
//                 Admin Home</NavLink>
//            </li>
            
//             </> 
//             :
//             <>
//             </>
//           }
//            <div className="divider "></div>

//            {/* shared Nav Link */}
//            <li><NavLink to="/">
//                 <FaHome></FaHome>
//              Home</NavLink>
//            </li>
//            <li><NavLink to="dashboard/addTask">
//                 <FaHome></FaHome>
//             Add Task</NavLink>
//            </li>
//            <li><NavLink to="/contact">
//                <FaVoicemail></FaVoicemail>
//              Contact</NavLink>
//            </li>
//             </ul>
//             </div>
//             {/* dashboard content */}
//             <div className="flex-1 p-8">
//                 <Outlet></Outlet>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;
import { useState, useEffect, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvide";


const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 1024);
  const [showToggleBtn, setShowToggleBtn] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    setShowToggleBtn(!showToggleBtn);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
    setShowToggleBtn(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 1024);
      setShowToggleBtn(true);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`flex ${showSidebar ? "" : "lg:pl-64"}`}>
      {/* Toggle button for mobile */}
      {showToggleBtn && (
        <button
          className="top-4 left-4 z-50 p-2 text-white lg:hidden"
          onClick={toggleSidebar}
        >
          <FaAlignJustify className="text-black text-3xl" />
        </button>
      )}

      {/* Close button inside the sidebar */}
      {showSidebar && (
        <button
          className="absolute top-4 right-4 z-50 p-2 text-white lg:hidden"
          onClick={closeSidebar}
        >
          <FaTimes className="text-black text-3xl" />
        </button>
      )}

      {/* Dashboard sidebar */}
      {showSidebar && (
        <div className="lg:w-64 min-h-screen bg-slate-800 text-red-500 font-bold">
          <ul className="menu p-4">
            {user ? (
              <>
                <div>
                  <div className="flex justify-center items-center">
                    <div className="avatar">
                      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt="User Avatar" />
                      </div>
                    </div>
                  </div>
                  <div className=" text-center text-2xl font-semibold py-2">
                    <li>{user.displayName.split(" ")[0]}</li>
                  </div>
                </div>

                <li>
                  <NavLink to="userDashboard">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to="addTask">Add Task</NavLink>
                </li>
              </>
            ) : null}
            {/* Default menus */}
            <div className="divider"></div>
            <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/">Contact</NavLink>
              </li>
            </>
          </ul>
        </div>
      )}

      {/* Dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
