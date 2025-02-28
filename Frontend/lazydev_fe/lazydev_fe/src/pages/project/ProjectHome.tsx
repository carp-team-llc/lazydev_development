import Header from "../../components/homepageloggedin/Header";
import Footer from "../../components/homepagenonlogin/Footer";
import MainContent from "../project/component/MainContent";
import RightSidebar from "../project/component/RightSideBar";
import Sidebar from "../project/component/SideBar";
import Top from "../project/component/Top";
import EmployeeInfoChart from "./component/EmployeeInfoChart";
import EmployeeInsights from "./component/EmployeeInsights";
import Metric from "./component/Metric";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 relative">
      {/* Header */}
      <Header />

      {/* Đặt Top ở vị trí cố định, tràn ngang toàn bộ */}
      <div className="absolute top-17 left-[260px] right-0 z-10">
        <Top />
      </div>

      {/* Main Layout - Thêm padding trên để tránh bị che mất */}
      <div className="flex w-full ">
        {/* Sidebar (Bên trái) */}
        <Sidebar className="w-[300px] min-h-screen border-r border-[#30363d]" />

        {/* Main Content */}
        <div className="flex-1 space-y-3 pt-16">
          <Metric />
          <EmployeeInfoChart />
          <EmployeeInsights />
          <MainContent />
        </div>

        {/* Right Sidebar (Bên phải) */}
        <div className="flex pt-16">
          <RightSidebar className=" w-[300px] min-h-screen border-l border-[#30363d] flex-shrink-0 " />
        </div>
      </div>

      <Footer />
    </div>
  );
}
