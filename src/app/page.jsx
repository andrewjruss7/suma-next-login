import Link from "next/link";
export default function HomePage() {

    return (
        <main>
            <div className="relative h-screen">
                <div className="absolute inset-0 z-10">
                    <div className="h-screen bg-my_bg_image bg-cover bg-no-repeat bg-center">
                        <div className="bg-green-suma bg-opacity-80 h-full w-full"></div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 p-8 lg:p-24 relative z-10">
                    <div className="px-8 lg:px-20 py-8 lg:py-20">
                        <h1 className="font-spring text-font-blue font-semibold text-4xl lg:text-5xl">
                            AN A.I POWERED PLATFORM <br /> TO BUILD WEALTH, TOGETHER
                        </h1>
                        <p className="font-worksans text-font-blue font-medium text-lg lg:text-2xl mt-4">
                            Fire up your wealth-building ability with your personalized A.I powered money coach and human financial advisor!
                        </p>
                        <p className="font-worksans text-font-blue font-medium text-lg lg:text-2xl mt-4">
                            Cure your financial pains, and go from “ay, my money” to “money A.I”, so you don't have to light saints candles to improve your financial future.
                        </p>
                        <div className="mt-8">
                            <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
                                <Link href="/login">
                                    <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 w-full sm:w-64 px-6 rounded-b mb-4 md:mb-0 md:mr-4 bg-red-suma text-font-white text-lg font-bold">
                                        LOGIN
                                    </button>
                                </Link>
                                <Link href="/register">
                                    <button
                                        className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 w-full sm:w-64 px-6 rounded-b bg-red-suma text-font-white text-lg font-bold"
                                    >
                                        SIGN UP
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}