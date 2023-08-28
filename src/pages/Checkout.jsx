import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import longLeftArrow from "../assets/images/long-left-arrow.png"
import MethodPayment from "../components/Layouts/MethodPayment"
import Order from "../components/Layouts/Order"
import { useDispatch, useSelector } from "react-redux"
import { getDetail } from "../store/product/action"
import { useEffect } from "react"

const Checkout = () => {
  const { id } = useParams()
  const dispacth = useDispatch()
  const { entity } = useSelector((state) => state.product)

  const fetchProductDetail = async (productId) => {
    await dispacth(getDetail(productId))
  }

  useEffect(() => {
    fetchProductDetail(id)
  }, [])

  return (
    <div className="px-[72px] py-[49px]">
      <span className="flex items-center gap-2 text-[#6D7175]/60">
        <img src={longLeftArrow} alt="" />
        <Link to={`/detail/${id}`} className="text-[#1097E7]">Checkout</Link>
        <i className="ri-arrow-right-s-line text-lg"></i>
        <span>Instruksi Bayar</span>
      </span>
      <div className="mt-10">
        <h1 className="text-[28px] font-[600] text-[#131313]">Checkout</h1>
        <div className="mt-5 flex gap-10">
          <MethodPayment />
          <Order value={entity} />
        </div>
      </div>
    </div>
  )
}

export default Checkout