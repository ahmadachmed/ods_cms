import { useEffect, useRef, useState } from "react";

export default function Categories() {
    const category = [{
        catImage: "images/invitation.png"
    }, { catImage: "images/invitation.png" }, { catImage: "images/invitation.png" }, { catImage: "images/invitation.png" }, { catImage: "images/invitation.png" }]

    const carousel = useRef(null);
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    }

    const isDisabled = (direction) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }

        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);

    return (
        <div className="bg-gray-200 px-5 py-10 pb-20 space-y-10">
            <div className="flex max-w-7xl md:px-5 mx-auto items-center pb-10">
                <div className="w-full">
                    <h2 className="text-xl font-serif font-semibold">Our <span className="border-separate">_____</span><br />Categories</h2>
                </div>
                <p className="text-sm">
                    Various types of invitation categories for you. You can easily search for what category of material you want
                </p>
            </div>
            <div className="relative items-center max-w-7xl md:px-5 mx-auto">
                <div className="flex justify-between absolute top-20 left w-full h-full">
                    <button
                        onClick={movePrev}
                        className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('prev')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-20 -ml-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#1F1E1D"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <span className="sr-only">Prev</span>
                    </button>
                    <button
                        onClick={moveNext}
                        className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('next')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-20 -ml-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#1F1E1D"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
            </div>
            <div ref={carousel} className="relative flex gap-5 md:max-w-5xl max-w-sm mx-auto overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
                {category.map(({ title = '', catImage, index }) => {
                    return (
                        <div key={index} className="text-center relative h-56 snap-start max-w-3xl mx-auto">
                            <a
                                href="/"
                                className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                                style={{ backgroundImage: `${catImage}` }}
                            >
                                <img
                                    src={catImage}
                                    alt={title}
                                    className="w-full aspect-square"
                                />
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}