import Button from "../Elements/Button"

const CTA = ({title, buttonTittle}) => {
    return (
        <div className="w-full min-h-[386px] bg-[#2B3E58] flex flex-col justify-center items-center gap-8">
            <span className="text-white font-[600] text-xl lg:text-[42px] text-center">{title}</span>
            <Button variant="bg-[#FCBC30] text-white px-10">{buttonTittle}</Button>
        </div>
    )
}

export default CTA