export default function Heros() {
    return (
        <div className="bg-gray-200">
            <div className="max-w-7xl mx-auto md:py-36 py-28 relative">
                <div className="absolute w-full -top-[43px] md:-top-28 left-0 px-5">
                    <div className="flex flex-col md:flex-row md:items-center space-y-10 justify-between">
                        <div className="font-black text-5xl md:text-9xl text-black shadow-xl px-3 py-3">
                            <h1>Our deep</h1>
                            <div className="flex items-center space-x-5">
                                <h1>story.</h1>
                                <p className="text-xs md:text-base max-w-xs md:font-medium font-light">Still, the second option holds promise could make the tagline shortlist.</p>
                            </div>
                        </div>
                        <div className="grid grid-flow-col md:grid-flow-row">
                            <button className="md:px-20 px-10 py-8 md:py-10 bg-green-800 text-white">
                                <span>Shop Now</span>
                            </button>
                            <button className="md:px-20 px-10 py-8 md:py-10 bg-gray-800 text-white">
                                <span>See Promo</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}