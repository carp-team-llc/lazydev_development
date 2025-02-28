import ProfileInfo from "../profile/component/ProfileInfo"
import TokensAndPoints from "../profile/component/TokensAndPoints"
import ActivityChart from "../profile/component/ActivityChart"
import ContributionGraph from "../profile/component/ContributionGraph"
import Headers from "../../components/homepageloggedin/Header"
import ActivityFeed2 from "./component/ActivityFeed2"
import Footer from "../../components/homepagenonlogin/Footer"
import DailyQuests from "../homeloggedin/components/dailyQuests"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300">
        <div> <Headers /></div>
      <div className="flex">
        <ProfileInfo />
        <div className="flex-1 p-6 space-y-6">
          <TokensAndPoints />
          <DailyQuests />
          <ActivityChart />
          <ContributionGraph />
          <ActivityFeed2/>
        </div>
      
        <div className="w-[300px] min-h-screen border-l border-[#30363d]"></div>
      </div>
      <Footer />
    </div>
  )
}

