import { Outlet } from "react-router-dom"
import Hero from "../components/Layouts/Hero"
import Footer from "../components/Layouts/Footer"
import Header from "../components/Layouts/Header"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#CEE6F3]/40 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>

  )
}

export default Home