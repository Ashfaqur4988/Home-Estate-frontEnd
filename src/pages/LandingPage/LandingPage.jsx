import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import HomePage from "../homePage/HomePage";
import "./landingPage.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const LandingPage = () => {
  return (
    <>
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

const RequireAuth = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" />;
  else {
    return (
      <>
        <div className="layout">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="content">
            <Outlet />
          </div>
        </div>
      </>
    );
  }
};
export { LandingPage, RequireAuth };
