import Header from "../../components/homepageloggedin/Header";
import Footer from "../../components/homepagenonlogin/Footer";
import CreateProject from "./component/CreateProject";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 relative">
      {/* Header */}
      <Header />

      {/* Main Layout - Thêm padding trên để tránh bị che mất */}
      <div className="flex w-full ">
     

        {/* Main Content */}
        <div className="flex-1 space-y-3 pt-16">
          <CreateProject />
        </div>
      </div>

      <Footer />
    </div>
  );
}
