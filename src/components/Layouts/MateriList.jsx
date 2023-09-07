const MateriList = ({ headline, materiList, linkRef }) => {
    return (
        <div className="bg-white shadow-md shadow-slate-500/30 rounded-[20px] py-8 px-8 lg:px-10" ref={linkRef}>
            <h1 className="text-[#2B3E58] text-2xl lg:text-[30px] font-bold">{headline}</h1>
            <ul className="mt-5">
                {
                    materiList.map((list, index) => (
                        <li key={index} className="py-2">
                            <div className="flex gap-2 items-center">
                                <img src="/src/assets/images/check-yellow.png" alt="" className="h-fit" />
                                <h3 className="font-[600] text-sm lg:text-[18px]">{list.subject}</h3>
                            </div>
                            <p className="ml-7 mt-1 text-[#868686] text-[14px]">{list.detail}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MateriList