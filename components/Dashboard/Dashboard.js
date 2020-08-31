import { TaskList } from "../Projects";
import LogoutBtn from "../Auth/Logout";
import SideNav from "../Navs/SideNav/SideNav";

import "./dashboard.scss";

function DashBoard() {
  return (
    <div className="dasboard-container">
      <div className="dashboard-top-nav">
        <LogoutBtn />
      </div>
      <SideNav />
      <div className="dashboard-main--view">
        <TaskList />
      </div>
    </div>
  );
}

export default DashBoard;
