import { Outlet } from "react-router-dom"
import Hero from "../components/Layouts/Hero"
import Footer from "../components/Layouts/Footer"

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="bg-[#CEE6F3]/40 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>

  )
}

export default Home