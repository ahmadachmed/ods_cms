import { useState } from "react"

export default function Products() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const tabsData = [
        {
            label: "Aesthetic",
            content:
                "Belum ada Product yang di sematkan",
        },
        {
            label: "Traditional",
            content:
                "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
        },
    ];

    return (
        <div className="bg-gray-200 px-5 space-y-16 py-10">
            <div className="flex flex-col items-center justify-center max-w-sm mx-auto gap-y-5">
                <h2 className="text-xl font-serif font-semibold">Our Products</h2>
                <p className="text-center text-gray-500"> Various types of unique Teapoty products, minimalist and the best prices</p>
            </div>
            <div class="text-sm font-medium text-center text-gray-500 ">
                <ul class="flex flex-wrap justify-center -mb-px border-gray-200">
                    {tabsData.map((tab, idx) => {
                        return (
                            <li key={idx} className="mr-2 ">
                                <a onClick={() => setActiveTabIndex(idx)} className={`inline-block p-3 border rounded-full border-transparent hover:text-gray-600 hover:border-gray-300 ${idx === activeTabIndex ? "text-white bg-orange-600 hover:text-gray-200 hover:bg-orange-500 " : ""}`}>{tab.label}</a>
                            </li>
                        )
                    })}
                </ul>
                <div className="py-4">
                    <p>{tabsData[activeTabIndex].content}</p>
                </div>
            </div>
            <div className="bg-white p-5 rounded-lg max-w-5xl mx-auto">
                <div className="pb-5">
                    <h3 className="font-serif text-2xl font-bold">Save 20% for today!</h3>
                    <p className="font-light">The Bruka Collection carries an appealing elongated oval optical shape</p>
                </div>
                <form className="w-10/12 flex border-2 rounded-full px-1 py-1">
                    <input className="w-full active:border-transparent focus-visible:border-transparent px-2" type="text" id="subscribe" name="subscribe" placeholder="Enter your email to get discount 20%" />
                    <span className="w-10"><img src="icons/rightArrow.svg" /></span>
                </form>
            </div>
        </div>
    )
}