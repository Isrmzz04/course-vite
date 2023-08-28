import { useNavigate } from "react-router-dom"
import Button from "../Elements/Button"

const CTA = () => {
    return (
        <div className="w-full min-h-[386px] bg-[#2B3E58] flex flex-col justify-center items-center gap-8">
            <span className="text-white font-[600] text-[42px]">Sudah siap bergabung?</span>
            <Button variant="bg-[#FCBC30] text-white px-10">Daftar Kelas</Button>
        </div>
    )
}

export default CTA