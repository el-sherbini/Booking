import "./list.scss";
import { Sidebar, Navbar, DataGridView } from "../../components";

const List = ({ columns }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataGridView columns={columns} />
      </div>
    </div>
  );
};

export default List;
