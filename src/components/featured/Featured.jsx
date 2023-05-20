import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Stock Overview</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Today's Volume</p>
        <p className="amount">505,940</p>
        <p className="itemTitle">
          Day's Range
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Current Price</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$12.4</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Day's Low</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$10.4</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Day's High</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$19.4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
