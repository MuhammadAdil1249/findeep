import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table"; 
import Seesv from "../../components/csvTable/CSVTable";
import csv from "../../components/chart/prices.json"
import Graph from "../../components/graph/Graph"


const Home = () => {
  return (
    <div className="home">
      {/* <Sidebar /> */}
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" amount="41442" diff="0.00"/>
          <Widget type="order" amount="TRG" diff="1.3" />
          <Widget type="earning" amount="50,000" diff="2.7" />
          <Widget type="balance" amount="53,972" diff="0.3"/>
        </div>
        <div className="charts">
          {/* <Featured /> */}
          {/* <Seesv /> */}
          <Chart csvFile={csv}/>
          <Graph></Graph>
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Latest Stocks</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Home;