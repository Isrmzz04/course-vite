import Header from "./Header"
import heroPerson from "../../assets/images/hero-person.png"
import substractYellow from "../../assets/images/Subtract-yellow.png"
import substractBlue from "../../assets/images/Subtract-blue.png"

const Hero = () => {
    return (
        <div className="relative w-full h-[621px] bg-[#152A46] pt-[28px] lg:px-[120px]">
            <Header />
            <div className="grid lg:grid-cols-2 h-full place-items-center">
                <div className="w-full h-full min-h-[495px] flex flex-col justify-center text-white">
                    <h1 className="font-[600] text-[42px] leading-[50px] mb-5">Jadi expert bersama <br /> edpsert.id</h1>
                    <p className="font-[400] text-[16px]">Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</p>
                </div>
                <div className="w-full h-full relative overflow-hidden">
                    <img src={heroPerson} alt="" className="absolute bottom-0 z-10" />
                    <img src={substractYellow} alt="" className="absolute right-[190px] top-[164px]" />
                    <img src={substractBlue} alt="" className="absolute -bottom-[55px] left-[150px]" />  
                </div>
            </div>
        </div>
    )
}

export default Hero