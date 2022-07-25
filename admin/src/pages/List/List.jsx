import "./list.scss";
import { Sidebar, Navbar, DataGridView } from "../../components";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataGridView />
      </div>
    </div>
  );
};

export default List;
