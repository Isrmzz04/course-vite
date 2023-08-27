import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAll } from "../store/product/action"
import Card from "../components/Layouts/Card"
import Pagination from "../components/Layouts/Pagination"

const ListProducts = () => {
  const { entities } =  useSelector((state) => state.product)
  const dispatch =  useDispatch()

  const fetchProducts = () => {
    dispatch(getAll())
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="bg-[#CEE6F3]/40 min-h-screen py-10">
      <div className="">
        <div className="gap-5 px-[72px] py-[89px] flex flex-wrap">
          <Card products={entities} />
        </div>
      {/* Jenis Program */}
      </div>
      <Pagination />
    </div>
  )
}

export default ListProducts