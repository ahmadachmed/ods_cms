
export default function Footer() {
    return (
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-5 py-10">
            <div className="font-serif font-bold pb-10">
                <h2 className="text-4xl">Need help anything ?</h2>
                <p className="font-sans font-light">Let's hear all about it!</p>
            </div>
            <div className="flex w-full justify-around">
                <ul className="font-semibold">Menu
                    <li className="font-light">About us</li>
                    <li className="font-light">History</li>
                </ul>
                <ul className="font-semibold">Product
                    <li className="font-light">About us</li>
                    <li className="font-light">History</li>
                </ul>
                <ul className="font-semibold">Discover
                    <li className="font-light">About us</li>
                    <li className="font-light">History</li>
                </ul>
                <ul className="font-semibold">Follow Us
                    <li className="font-light">About us</li>
                    <li className="font-light">History</li>
                </ul>
            </div>
        </div>
    )
}
