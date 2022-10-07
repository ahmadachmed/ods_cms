
export default function Hero() {
    return (
        <div className="w-full h-full flex flex-col md:flex-row-reverse md:items-center max-w-7xl mx-auto px-5 py-5 md:py-10">
            <div className="md:max-w-md max-w-xs pt-10 mx-auto pb-10">
                <img src="images/invitation.png" />
            </div>
            <div className="flex flex-col md:w-1/2 space-y-5 pb-14">
                <h1 className="text-white font-serif text-6xl leading-tight"><span className="font-bold">Simple</span> way to choose your Invitation</h1>
                <form className="w-10/12 md:w-10/12 md:mx-0 mx-auto flex border-2 rounded-full px-1 py-1">
                    <input className="w-full px-2 rounded-full bg-transparent" type="text" id="subscribe" name="subscribe" placeholder="Enter your email to get discount 20%" />
                    <span className="w-10"><img src="icons/rightArrow.svg" /></span>
                </form>
                <div className="flex md:w-1/2 justify-around">
                    <div className="flex space-x-2">
                        <h3 className="font-medium text-2xl">100+</h3>
                        <p className="w-12 font-light leading-none">unique style</p>
                    </div>
                    <div className="flex space-x-2">
                        <h3 className="font-medium text-2xl">98+</h3>
                        <p className="w-12 font-light leading-none">superb style</p>
                    </div>
                </div>
            </div>
        </div>
    )
}