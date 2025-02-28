import Sidebar from "../explore/component/SideBar";
import MainContent from "../explore/component/MainContent";
import Footer from "../../components/homepagenonlogin/Footer";
import Header from "../../components/homepageloggedin/Header";

export default function Explorehome() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0D1117]">
      {/* Header */}
      <Header />

      {/* Main Layout */}
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">
          <MainContent />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
