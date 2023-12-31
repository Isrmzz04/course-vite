import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAll } from "../store/product/action"
import Card from "../components/Layouts/Card"
import Pagination from "../components/Layouts/Pagination"
import Hero from "../components/Layouts/Hero"


const ListProducts = () => {
  const { entities } = useSelector((state) => state.product)
  const dispatch = useDispatch()

  const fetchProducts = () => {
    dispatch(getAll())
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <Hero />
      <div className="px-[10%] lg:px-[72px] py-[89px]">
        <div className="">
          <div className="gap-x-5 gap-y-10 flex flex-wrap mb-10 justify-evenly">
            <Card products={entities} />
          </div>
          {/* Jenis Program */}
        </div>
        <Pagination />
      </div>
    </>
  )
}

export default ListProducts