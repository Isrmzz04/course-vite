import { toIdr } from "../utils/toIdr"
import { useNavigate } from "react-router-dom"
const Card = ({ products }) => {
    const navigate = useNavigate()

    const getDetail = (productId) => {
        navigate(`/detail/${productId}`)
    }

    return (
        <>
            {products.length > 0 && products.map((product, index) => (
                <div key={index} onClick={() => getDetail(product.id)} className="w-[382px] bg-white shadow-md shadow-slate-500/30 rounded-[20px] overflow-hidden cursor-pointer hover:scale-105 transition-all hover:shadow-xl">
                    <div className="bg-[#152a46] flex pt-[16px] px-[24px] gap-6">
                        <img src="/assets/images/person.png" alt="" className="w-[75x] h-[129px]" />
                        <div className="text-white">
                            <h1 className="font-bold text-[#ffcd29]">Insentive Bootcamp</h1>
                            <h2 className="font-bold text-[20px]">{product.title}</h2>
                            <p className="text-[12px]">({product.description})</p>
                        </div>
                    </div>
                    <div className="py-4 px-8 leading-[25px]">
                        <div>
                            <h2 className="font-semibold text-[20px]">{product.title}</h2>
                            <h3 className="font-semibold text-[17px]">{product.description}</h3>
                        </div>
                        <div className="mt-3">
                            <ul>
                                <li className="text-black/50">Batch <span className="text-black ml-5">{product.batch}</span></li>
                                <li className="text-black/50">Mentor <span className="text-black ml-3">{product.mentor}</span></li>
                            </ul>
                        </div>
                        <div className="mt-5 flex justify-end tracking-tighter">
                            {
                                product.discount ? (
                                    <p className="flex gap-2">
                                        <s className="text-black/50 font-[500] text-[15px] block -mt-2">{toIdr(product.price)}</s>
                                        <span className="text-[#0ACF83] font-bold text-[20px]">{toIdr(product.discount)}</span>
                                    </p>
                                ) : (
                                    <p className="text-[#0ACF83] font-bold">{toIdr(product.price)}</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card