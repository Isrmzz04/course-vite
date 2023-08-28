import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDetail } from "../store/product/action"
import { useEffect, useRef } from "react"
import { toIdr } from "../components/utils/toIdr"
import Button from "../components/Elements/Button"
import MateriList from "../components/Layouts/MateriList"
import { useNavigate } from "react-router-dom"
import CTA from "../components/Layouts/CTA"
import { useState } from "react"

const DetailProduct = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const dispacth = useDispatch()
  const { entity } = useSelector((state) => state.product)

  const fetchProductDetail = async (productId) => {
    await dispacth(getDetail(productId))
  }

  useEffect(() => {
    fetchProductDetail(id)
  }, [])

  const materiList = [
    {
      subject: "Pengenalan Programming Laravel",
      detail: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden."

    },
    {
      subject: "Materi Bootcamp Laravel 2",
      detail: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden."
    },
    {
      subject: "Materi Bootcamp Laravel 3",
      detail: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden."
    },
    {
      subject: "Materi Bootcamp Laravel 4",
      detail: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden."
    },
    {
      subject: "Materi Bootcamp Laravel 5",
      detail: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden."
    },
    {
      subject: "Materi Bootcamp Laravel 6",
      detail: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden."
    }
  ]

  const benefit = [
    {
      subject: "E-Sertifikat"
    },
    {
      subject: "Portfolio"
    },
    {
      subject: "Job Connector"
    },
    {
      subject: "Career Development"
    }
  ]

  const MateriRef = useRef()
  const fasilitasRef = useRef()

  const goTo = (ref) => {
    scrollTo({
      top: ref.offsetTop + -120,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      <div className="flex gap-10 px-[72px] py-[89px]">
        <div className="w-fit h-[256px] bg-white shadow-md shadow-slate-500/30 rounded-[20px]">
          <ul className="pb-2 pt-5 font-[500] leading-8 border-b">
            <li className="cursor-pointer hover:bg-[#F1F7FF] hover:border-r-4 hover:border-[#197BFF] px-10 py-2 hover:text-[#197BFF]" onClick={() => goTo(MateriRef.current)}>Materi</li>
            <li className="cursor-pointer hover:bg-[#F1F7FF] hover:border-r-4 hover:border-[#197BFF] px-10 py-2 hover:text-[#197BFF]" onClick={() => goTo(fasilitasRef.current)}>Fasilitas</li>
          </ul>
          <div className="mt-4 px-5">
            {
              entity.discount ? (
                <p className="flex gap-2">
                  <s className="text-black/50 font-[500] block text-sm">{toIdr(entity.price)}</s>
                  <span className="text-[#FF6A28] font-bold">{toIdr(entity.discount)}</span>
                </p>
              ) : (
                <p className="text-[#FF6A28] font-bold text-sm">{toIdr(entity.price)}</p>
              )
            }
          </div>
          <div className="mt-5 text-center">
            <Button variant="bg-[#FFCD29] text-white" onClick={() => navigate("/checkout/" + id)}>Daftar Kelas</Button>
          </div>
        </div>
        <div className="space-y-10">
          <MateriList headline="Materi" materiList={materiList} linkRef={MateriRef} />
          <MateriList headline="Fasilitas" materiList={benefit} linkRef={fasilitasRef} />
        </div>

      </div>
      <CTA />
    </>
  )
}

export default DetailProduct