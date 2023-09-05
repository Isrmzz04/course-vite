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
        <div className="px-[72px] py-[49px]">
            <span className="flex items-center gap-2 text-[#6D7175]/60">
                <img src={longLeftArrow} alt="" />
                <Link to={`/checkout`} state={{ data: data }} >Checkout</Link>
                <i className="ri-arrow-right-s-line text-lg"></i>
                <span className="text-[#1097E7]">Instruksi Bayar</span>
            </span>

            <div className="mt-10">
                <h1 className="text-[28px] font-[600] text-[#131313]">
                    Intruksi Bayar
                </h1>
                <div className="mt-5 bg-white w-full shadow-sm shadow-slate-500/30 rounded-[20px] overflow-hidden">
                    <div className="py-16 px-12 grid grid-cols-2">
                        <div>
                            <div className="flex overflow-hidden gap-2">
                                <div className="w-1/3 bg-cover">
                                    <img src={imageOrder} alt="" />
                                </div>

                                <div className="w-2/3 -ml-28">
                                    <div>
                                        <h2 className="font-semibold text-[18px]">{data.title}</h2>
                                        <h3 className="font-semibold text-[15px]">{data.description}</h3>
                                    </div>
                                    <div className="mt-3">
                                        <ul>
                                            <li className="text-black/50 text-sm">Batch <span className="text-black ml-5">{data.batch}</span></li>
                                            <li className="text-black/50 text-sm">Mentor <span className="text-black ml-3">{data.mentor}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 ">
                                <h2 className="text-[18px] font-[600] text-[#131313] mb-5">Metode Pembayaran</h2>
                                <ul className="space-y-4">
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
                                    <li className="font-[500] tracking-tight text-lg">{toIdr(400000)}</li>
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