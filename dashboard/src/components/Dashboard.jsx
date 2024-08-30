import { Routes, Route } from "react-router-dom";
import Holding from "./Holding";
import Order from "./Order";
import Position from "./Position";
import Summary from "./Summary";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/holdings" element={<Holding />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/position" element={<Position />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
