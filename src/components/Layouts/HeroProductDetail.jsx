import { useParams } from "react-router-dom"
import heroPerson from "../../assets/images/hero-person.png"
import substractYellow from "../../assets/images/Subtract-yellow.png"
import { useEffect } from "react"

const HeroProductDetail = ({ data }) => {
    const { id } = useParams()
    return (
        <div className="relative w-full h-[721px] lg:h-[621px] bg-[#152A46] pt-[28px] px-[5%] lg:px-[120px] overflow-hidden">
            <div className="grid grid-cols-1 lg:h-full lg:place-items-center">
                <div className="w-full h-full min-h-[495px] flex flex-col justify-center text-white">
                    <h1 className="font-[600] text-[42px] leading-[50px] mb-3">{data.title}</h1>
                    <p className="font-[400] text-3xl ">{data.description}</p>
                    <div className="mt-10 space-y-3">
                        <p>Mentor</p>
                        <div>
                            <span className="text-xl">{data.mentor}</span>
                            <p className="font-[300]">Developer at Widya Edu</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 right-[3%] z-10">
                <img src={heroPerson} alt="" className="absolute bottom-[75px] scale-[2]" />
                <img src={substractYellow} alt="" className="mb-10" />
            </div>
        </div>
    )
}

export default HeroProductDetail