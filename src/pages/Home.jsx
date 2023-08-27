import { Outlet } from "react-router-dom"
import Hero from "../components/Layouts/Hero"
import Footer from "../components/Layouts/Footer"

const Home = () => {
  return (
    <div>
      <Hero />
      <Outlet />
      <Footer />
    </div>

  )
}

export default Home