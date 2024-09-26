import { Link } from "react-router-dom";
import "./navbar.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNotifyStore } from "../../lib/notificationStore";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const fetch = useNotifyStore((state) => state.fetch);
  const number = useNotifyStore((state) => state.number);
  fetch();

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo1.png" alt="" />
          <span>SweetHomes</span>
        </a>
        <Link to="/list">Properties</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link className="profile" to="/profile">
              Profile
              {number > 0 && <div className="notification">{number}</div>}
            </Link>
          </div>
        ) : (
          <>
            <Link to={"/login"}>Sing In</Link>
            <Link to={"/signup"} className="register">
              Sing Up
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/list">Properties</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to={"/login"}>Sing In</Link>
          <Link to={"/signup"} className="register">
            Sing Up
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
