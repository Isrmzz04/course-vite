import Accordion from "../Elements/Accordion"
import mandiri from "../../assets/images/bank-mandiri.png"
import bca from "../../assets/images/bank-bca.png"
import { useEffect } from "react"

const manualVerif = {
    method: "Bank Transfer (verifikasi manual)",
    desc: "Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode bayar ini memerlukan verifikasi pembayaran manual melalui Whatsapp.",
    bankOptions: [
        {
            bank: "Bank Transfer ke Rek Bank Mandiri",
            image: mandiri
        },
        {
            bank: "Bank Transfer ke Rek Bank BCA",
            image: bca
        },
    ]

}

const otoVerif = {
    method: "Virtual Account (verifikasi otomatis)",
    desc: "Pembayaran melalui virtual account berbagai bank. Metode bayar ini akan diverifikasi secara otomatis.",
    bankOptions: [
        {
            bank: "Virtual Account Mandiri",
            image: mandiri
        },
        {
            bank: "Virtual Account BCA",
            image: bca
        },
    ]

}

const MethodPayment = () => {
    useEffect(() => {
        console.log(manualVerif)
    }, [])

    return (
        <div className="bg-white w-full shadow-sm shadow-slate-500/30 rounded-[20px] py-6 px-10">
            <h2 className="text-[18px] font-[600] text-[#131313] mb-5">Pilih Metode Pembayaran</h2>
            <Accordion methodPayment={manualVerif} />
            <Accordion methodPayment={otoVerif} />
        </div>
    )
}

export default MethodPayment