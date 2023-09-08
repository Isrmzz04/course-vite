import { Link } from "react-router-dom"
import longLeftArrow from "../assets/images/long-left-arrow.png"
import MethodPayment from "../components/Layouts/MethodPayment"
import Order from "../components/Layouts/Order"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

const Checkout = () => {
  const location = useLocation()
  const data = location.state.data

  return (
    <div className="px-[5%] lg:px-[72px] py-[49px] mt-20 lg:mt-24">
      <span className="flex items-center gap-2 text-[#6D7175]/60 text-sm">
        <img src={longLeftArrow} alt="" className="h-3" />
        <Link to={`/detail/${data.id}`} className="text-[#1097E7]">Checkout</Link>
        <i className="ri-arrow-right-s-line text-lg"></i>
        <span>Instruksi Bayar</span>
      </span>
      <div className="mt-10">
        <h1 className="text-xl lg-text-[28px] font-[600] text-[#131313]">Checkout</h1>
        <div className="mt-5 flex gap-10 flex-wrap lg:flex-nowrap">
          <MethodPayment />
          <Order value={data} />
        </div>
      </div>
    </div>
  )
}

export default Checkout