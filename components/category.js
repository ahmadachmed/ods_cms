

export default function Category() {
    return (
        <div className="bg-gray-200">
            <div className="max-w-7xl px-5 py-10 mx-auto">
                <div className="relative grid grid-flow-col gap-2">
                    <div className="absolute z-10 right-28 top-12 md:hidden">
                        <div className="flex items-center justify-center bg-green-800 w-24 h-24 rounded-full">
                            <p className="text-xs text-white">Categories</p>
                        </div>
                    </div>
                    <button className="relative w-full col-span-2 row-span-2 group">
                        <div className="absolute z-10 w-full h-full text-white md:text-5xl text-sm flex justify-center items-center group">
                            {/* <p className="border-orange-600 md:border-b-[12px] border-b-4">Traditional Style</p> */}
                            <p className="bg-orange-600 px-2">Traditional Style</p>
                        </div>
                        <img
                            src="images/bg1.jpg"
                            alt="Photo by Claudio Schwarz on Unsplash"
                            className="inset-0 h-full w-full object-cover object-center rounded opacity-95 group-hover:opacity-100 duration-200" />
                    </button>
                    <button class="relative w-full group">
                        <div className="absolute z-10 w-full h-full text-white md:text-xl text-xs flex justify-center items-center group">
                            {/* <p className="border-orange-600 md:border-b-8 border-b-2">Modern Style</p> */}
                            <p className="bg-orange-600 px-2">Modern Style</p>
                        </div>
                        <img
                            src="images/bg-2.jpg"
                            alt="Photo by Claudio Schwarz on Unsplash"
                            className="inset-0 h-full w-full object-cover object-center rounded opacity-95 group-hover:opacity-100 duration-200" />
                    </button>
                    <button class="relative w-full group">
                        <div className="absolute z-10 w-full h-full text-white md:text-xl text-xs flex justify-center items-center group">
                            <p className="bg-orange-600 px-2">Minimalist Style</p>
                            {/* <p className="border-orange-600 md:border-b-8 border-b-2">Minimalist Style</p> */}
                        </div>
                        <img
                            src="images/bg-2.jpg"
                            alt="Photo by Claudio Schwarz on Unsplash"
                            className="inset-0 h-full w-full object-cover object-center rounded opacity-95 group-hover:opacity-100 duration-200" />
                    </button>

                </div>
            </div>

        </div>
    )
}