const contents = [
    {
        title: "Section 1",
        description: "lorem ipsum dolor sit amet 1",
        price: 2000,
        discount: 500
    },
    {
        title: "Section 2",
        description: "lorem ipsum dolor sit amet 2",
        price: 3000,
    },
]

const Sections = () => {
    return (
        <div className="gap-5 px-[72px] py-[89px] grid lg:grid-cols-2">
            {contents.map((item, index) => (
                <section key={index} className="min-w-[352px] bg-white shadow-sm">
                    <div className="bg-[#152a46] flex pt-[16px] px-[28px] rounded-t-[20px] gap-6">
                        <img src="/assets/images/person.png" alt="" className="w-[75ox] h-[150px]" />
                        <div className="text-white">
                            <h1 className="font-bold text-[#ffcd29]">Insentive Bootcamp</h1>
                            <h2 className="font-bold text-[20px]">Programming Laravel</h2>
                            <p className="text-[12px]">(Getting Started with Laravel 9)</p>
                        </div>
                    </div>
                    <p>{item.description}</p>
                </section>
            ))}
        </div>
    )
}

export default Sections