import { useLocation, Link } from "react-router-dom"
import longLeftArrow from "../assets/images/long-left-arrow.png"
import imageOrder from "../assets/images/img-order.png"
import mandiri from "../assets/images/bank-mandiri.png"
import { toIdr } from "../components/utils/toIdr"
import CTA from "../components/Layouts/CTA"
import Tabs from "../components/Layouts/Tabs"

const Payment = () => {
    const location = useLocation()
    const data = location.state.data
    // console.log({data})

    return (
        <div className="px-[5%] lg:px-[72px] py-[49px]">
            <span className="flex items-center gap-2 text-[#6D7175]/60 text-sm">
                <img src={longLeftArrow} alt="" className="h-3" />
                <Link to={`/detail/${data.id}`}>Checkout</Link>
                <i className="ri-arrow-right-s-line text-lg"></i>
                <span className="text-[#1097E7]">Instruksi Bayar</span>
            </span>

            <div className="mt-10">
                <h1 className="text-[28px] font-[600] text-[#131313]">
                    Intruksi Bayar
                </h1>
                <div className="mt-5 bg-white w-full shadow-sm shadow-slate-500/30 rounded-[20px] overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 py-8 px-8 lg:px-10">
                        <div>
                            <div className="flex overflow-hidden gap-4">
                                <div className="w-1/3 bg-cover">
                                    <img src={imageOrder} alt="" />
                                </div>

                                <div className="w-2/3 md:-ml-20 lg:-ml-5">
                                    <div>
                                        <h2 className="font-semibold text-md lg:text-[18px]">{data.title}</h2>
                                        <h3 className="font-semibold text-sm lg:text-[15px]">{data.description}</h3>
                                    </div>
                                    <div className="mt-3 hidden md:block lg:block">
                                        <ul className="space-y-1">
                                            <li className="text-black/50 text-sm">Batch <span className="text-black ml-5">{data.batch}</span></li>
                                            <li className="text-black/50 text-sm">Mentor <span className="text-black ml-3">{data.mentor}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 block md:hidden lg:hidden">
                                <ul className="space-y-1">
                                    <li className="text-black/50 text-sm">Batch <span className="text-black ml-5">{data.batch}</span></li>
                                    <li className="text-black/50 text-sm">Mentor <span className="text-black ml-3">{data.mentor}</span></li>
                                </ul>
                            </div>
                            <div className="mt-5 mb-10">
                                <h2 className="text-[18px] font-[600] text-[#131313]">Metode Pembayaran</h2>
                                <ul className="space-y-4 mt-2 text-sm lg:text-md">
                                    <li>Bank Transfer (verifikasi manual)-Mandiri</li>
                                    <li>
                                        <div className="flex items-center gap-8">
                                            <div>
                                                <img src={mandiri} alt="" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span>No Rek. 137000299089</span>
                                                <span className="text-[#6D7175]">a.n. PT Widya Kreasi Bangsa</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="text-[#6D7175]">Nominal yang harus dibayar senilai:</li>
                                    <li className="font-[600] tracking-tight text-lg">{toIdr(400000)}</li>
                                </ul>

                            </div>
                        </div>
                        <div>
                            <h2 className="text-[18px] font-[600] text-[#131313] mb-5">Intruksi Pembayaran</h2>
                            <Tabs />
                        </div>
                    </div>
                    <CTA title="Sudah Transfer? Lakukan verifikasi pembayaran segera!" buttonTittle="Verifikasi Pembayaran" />
                </div>
            </div>
        </div>
    )
}

export default Payment