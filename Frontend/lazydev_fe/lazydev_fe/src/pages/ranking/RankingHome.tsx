import Header from "../../components/homepageloggedin/Header";
import Footer from "../../components/homepagenonlogin/Footer";
import Contribute from "./component/ContriBute";
import Categories from "./component/Categories";
import ProjectRank from "./component/ProjectRank";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar (Bên trái) */}

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Ranking component */}
          <div className="grid grid-cols-2 gap-2 p-6 w-full">
            <div className="w-full flex-grow">
              <Contribute />
            </div>
            <div className="w-full flex-grow">
              <Categories />
            </div>
            <div className="col-span-2 w-full">
              <ProjectRank />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
