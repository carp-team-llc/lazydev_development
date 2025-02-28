import Header from "../../components/homepageloggedin/Header";
import FeaturedProjects from "./components/featuredProjects";
import { LineChart } from "./components/LineChart";
import BadgeProgress from "./components/BadgeProgress";
import QuestStreak from "./components/QuestStreak";
import DailyQuests from "./components/dailyQuests";
import Activities from "./components/Activities";
import Footer from "../../components/homepagenonlogin/Footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <Header />
      <div className="flex">
        <FeaturedProjects />
        <div className="flex-1 p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="min-w-0">
              <LineChart />
            </div>
            <div className="min-w-0">
              <BadgeProgress />
            </div>
            <div className="min-w-0">
              <QuestStreak />
            </div>
          </div>
          <DailyQuests />
        </div>
        <Activities />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
