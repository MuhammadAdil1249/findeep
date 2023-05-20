import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <Link to="/home" style={{ textDecoration: "none" }}>
              HOME
            </Link>
          </div>
          {/* <div className="item">
          <Link to="/contact" style={{ textDecoration: "none" }}>
            SERVICES
          </Link>
          </div> */}
          <div className="item">
            <Link to="/companies" style={{ textDecoration: "none" }}>
              COMPANIES
            </Link>
          </div>
          <div className="item">
            <Link to="/about" style={{ textDecoration: "none" }}>
              ABOUT US
            </Link>
          </div>
          <div className="item">
            <Link to="/contact" style={{ textDecoration: "none" }}>
              CONTACT
            </Link>
          </div>
          <div className="item">
            <Button className="logbtn" onClick={handleLogout}>
              Log out
            </Button>
            </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
