import { useLocation, Link } from "react-router-dom"
import longLeftArrow from "../assets/images/long-left-arrow.png"
import imageOrder from "../assets/images/img-order.png"
import CTA from "../components/Layouts/CTA"

const Payment = () => {
    const location = useLocation()
    const data = location.state.data

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
                            <div className="flex overflow-hidden">
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
                        </div>
                        <div>
                            <h2 className="text-[18px] font-[600] text-[#131313] mb-5">Intruksi Pembayaran</h2>
                        </div>
                    </div>
                    <CTA title="Sudah Transfer? Lakukan verifikasi pembayaran segera!" buttonTittle="Verifikasi Pembayaran" />
                </div>
            </div>
        </div>
    )
}

export default Payment