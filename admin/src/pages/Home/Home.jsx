import "../../styles/main.scss";
import {
  Sidebar,
  Navbar,
  Widget,
  Featured,
  Chart,
  DataTable,
} from "../../components";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
