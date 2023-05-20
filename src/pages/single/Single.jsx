import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">NETSOL</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">info@netsol.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+92-31452628</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Gulberg, Lahore
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">PAKISTAN</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
