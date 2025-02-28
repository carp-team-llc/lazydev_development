import Navbar from "../../components/homepagenonlogin/Navbar"
import Hero from "./component/Hero"
import Starts from "./component/Starts"
import FeaturedProjects from "./component/FeaturedProjects"
import Community from "./component/Community"
import ActivityFeed from "./component/ActivityFeed"
import Footer from "../../components/homepagenonlogin/Footer"
import PlatForm from "./component/Platform"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Starts />
      <FeaturedProjects />
      <Community />
      <ActivityFeed />
      <PlatForm />
      <Footer />
    </main>
  )
}

