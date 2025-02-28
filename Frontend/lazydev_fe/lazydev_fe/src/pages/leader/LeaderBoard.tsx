import Header from "../../components/homepageloggedin/Header";
import Footer from "../../components/homepagenonlogin/Footer";
import Sidebar from "../project/component/SideBar";
import LeaderHome from "./component/LeaderHome";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 relative">
      {/* Header */}
      <Header />

      {/* Main Layout - Thêm padding trên để tránh bị che mất */}
      <div className="flex w-full ">
        {/* Sidebar (Bên trái) */}
        <Sidebar className="w-[300px] min-h-screen border-r border-[#30363d]" />

        {/* Main Content */}
        <div className="flex-1 space-y-3 pt-16">
          <LeaderHome />
        </div>
      </div>

      <Footer />
    </div>
  );
}
