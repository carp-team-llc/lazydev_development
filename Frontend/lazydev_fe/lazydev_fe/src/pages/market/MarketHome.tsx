import HeroSection from "../market/component/HeroSection"
import ExploreSection from "../market/component/ExploreSection"
import CollectionsSection from "../market/component/CollectionsSection"
import Header from "../../components/homepageloggedin/Header"
import Footer from "../../components/homepagenonlogin/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
    <Header />
      <HeroSection />
      <ExploreSection />
      <CollectionsSection />
      <Footer />
    </main>
  )
}

