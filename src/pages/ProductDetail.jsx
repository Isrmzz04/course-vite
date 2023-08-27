import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDetail } from "../store/product/action"
import { useEffect } from "react"
import { toIdr } from "../components/utils/toIdr"

const DetailProduct = () => {
  const { id } = useParams()
  const dispacth = useDispatch()
  const { entity } = useSelector((state) => state.product)

  const fetchProductDetail = async (productId) => {
    await dispacth(getDetail(productId))
  }

  useEffect(() => {
    fetchProductDetail(id)
  }, [])

  console.log(entity)

  return (
    <div className="w-[80%] mx-auto py-[200px]">
      <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div
            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
          >
            <dt className="font-medium text-gray-900">Title</dt>
            <dd className="text-gray-700 sm:col-span-2">{entity.title}</dd>
          </div>

          <div
            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
          >
            <dt className="font-medium text-gray-900">Description</dt>
            <dd className="text-gray-700 sm:col-span-2">{entity.description}</dd>
          </div>

          <div
            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
          >
            <dt className="font-medium text-gray-900">Batch</dt>
            <dd className="text-gray-700 sm:col-span-2">{entity.batch}</dd>
          </div>

          <div
            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
          >
            <dt className="font-medium text-gray-900">Mentor</dt>
            <dd className="text-gray-700 sm:col-span-2">{entity.mentor}</dd>
          </div>

          <div
            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
          >
            <dt className="font-medium text-gray-900">Price</dt>
            <dd className="text-gray-700 sm:col-span-2">{toIdr(entity.price)}</dd>
          </div>
          <div
            className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
          >
            <dt className="font-medium text-gray-900">Discount</dt>
            <dd className="text-gray-700 sm:col-span-2">{toIdr(entity.discount)}</dd>
          </div>
        </dl>
      </div>
    </div>

  )
}

export default DetailProduct