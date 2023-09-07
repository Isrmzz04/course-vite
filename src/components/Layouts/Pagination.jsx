

const Pagination = () => {
    return (
        <div className="flex flex-col items-end px-5 py-5">
            <div className="flex items-center gap-1 text-sm]">
                <button type="button" className="w-full flex items-center gap-1 text-gray-600 mr-5">
                    <i className="ri-arrow-left-s-line text-xl"></i>
                    <span>Sebelumnya</span>
                </button>
                <button type="button" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md">
                    1
                </button>
                <button type="button" className="w-full flex items-center gap-1 text-gray-600 ml-5">
                    <span>Selanjutnya</span>
                    <i className="ri-arrow-right-s-line text-xl"></i>
                </button>
            </div>
        </div>
    )
}

export default Pagination