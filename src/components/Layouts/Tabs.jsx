import { useState } from 'react';

const Tabs = () => {
    const [selectedTab, setSelectedTab] = useState('ATM');

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="Tab" className="sr-only">Tab</label>
                <select
                    id="Tab"
                    className="w-full rounded-md border-gray-200"
                    value={selectedTab}
                    onChange={(e) => handleTabChange(e.target.value)}
                >
                    <option value="ATM">ATM</option>
                    <option value="Internet Banking">Internet Banking</option>
                    <option value="M-Banking">M-Banking</option>
                </select>
            </div>

            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex gap-6" aria-label="Tabs">
                        <button
                            className={`shrink-0 border-b-2 ${selectedTab === 'ATM' ? 'border-sky-500 text-sky-600' : 'border-transparent'
                                } px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`}
                            aria-current={selectedTab === 'ATM' ? 'page' : undefined}
                            onClick={() => handleTabChange('ATM')}
                        >
                            ATM
                        </button>

                        <button
                            className={`shrink-0 border-b-2 ${selectedTab === 'Internet Banking' ? 'border-sky-500 text-sky-600' : 'border-transparent'
                                } px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`}
                            onClick={() => handleTabChange('Internet Banking')}
                        >
                            Internet Banking
                        </button>

                        <button
                            className={`shrink-0 border-b-2 ${selectedTab === 'M-Banking' ? 'border-sky-500 text-sky-600' : 'border-transparent'
                                } px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`}
                            onClick={() => handleTabChange('M-Banking')}
                        >
                            M-Banking
                        </button>
                    </nav>
                </div>
            </div>
            <div className="mt-5">
                {selectedTab === 'ATM' && (
                    <div>
                        <ol className="list-decimal ml-5">
                            <li>Masukkan kartu ke mesing ATM Mandiri</li>
                            <li>Pilih Bahasa</li>
                            <li>Masukkan PIN ATM</li>
                            <li>Pilih menu transaksi lainnya</li>
                            <li>Pilih menu “Transfer”, lalu pilih ke relk Mandiri</li>
                            <li>Masukkan no rekening yang dituju</li>
                            <li>Masukkan nominal jumlah uang yang akan di transfer</li>
                            <li>Layar ATM akan menampilkan data transaksi anda, jika data sudah benar pilih “YA”</li>
                            <li>Selesai, struk akan keluar dari mesin ATM</li>
                        </ol>
                    </div>
                )}
                {selectedTab === 'Internet Banking' && (
                    <div>
                        Internet Banking
                    </div>
                )}
                {selectedTab === 'M-Banking' && (
                    <div>
                        M-Banking
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs;
