import { ArrowRight, ChevronRight } from "lucide-react";

import { assets } from "../assets/assets";
import CategoriesMarquee from "./CategoriesMarquee";

const Hero = () => {
    const currency = import.meta.env.VITE_CURRENCY_SYMBOL || "₹";

    return (
        <div className="mx-6">
            <div className="flex flex-col xl:flex-row gap-8 max-w-7xl mx-auto my-10">
                {/* Left Hero Card */}
                <div className="relative flex-1 flex flex-col bg-green-200 rounded-3xl xl:min-h-[400px] group overflow-hidden">
                    <div className="p-5 sm:p-16">
                        <div className="inline-flex items-center gap-3 bg-green-300 text-green-600 pr-4 p-1 rounded-full text-xs sm:text-sm">
                            <span className="bg-green-600 px-3 py-1 rounded-full text-white text-xs">
                                NEWS
                            </span>

                            Free Shipping on Orders Above ₹50!

                            <ChevronRight
                                size={16}
                                className="transition-all duration-300 group-hover:ml-2"
                            />
                        </div>

                        <h2 className="text-3xl sm:text-5xl leading-[1.2] my-3 font-medium bg-gradient-to-r from-slate-600 to-[#A0FF74] bg-clip-text text-transparent max-w-xs sm:max-w-md">
                            Gadgets you'll love. Prices you'll trust.
                        </h2>

                        <div className="text-slate-800 text-sm font-medium mt-4 sm:mt-8">
                            <p>Starts from</p>
                            <p className="text-3xl">
                                {currency}
                                499
                            </p>
                        </div>

                        <button className="bg-slate-800 text-white text-sm py-2.5 px-7 sm:py-5 sm:px-12 mt-4 sm:mt-10 rounded-md hover:bg-slate-900 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                            LEARN MORE
                        </button>
                    </div>

                    <img
                        src={assets.hero_model_img}
                        alt="Hero Model"
                        className="sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm object-contain"
                    />
                </div>

                {/* Right Cards */}
                <div className="flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-slate-600">
                    {/* Card 1 */}
                    <div className="flex-1 flex items-center justify-between bg-orange-200 rounded-3xl p-6 px-8 group">
                        <div>
                            <p className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#FFAD51] bg-clip-text text-transparent max-w-40">
                                Best products
                            </p>

                            <p className="flex items-center gap-1 mt-4 cursor-pointer">
                                View more
                                <ArrowRight
                                    size={18}
                                    className="transition-all duration-300 group-hover:ml-2"
                                />
                            </p>
                        </div>

                        <img
                            src={assets.hero_product_img1}
                            alt="Best Product"
                            className="w-35 object-contain"
                        />
                    </div>

                    {/* Card 2 */}
                    <div className="flex-1 flex items-center justify-between bg-blue-200 rounded-3xl p-6 px-8 group">
                        <div>
                            <p className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#78B2FF] bg-clip-text text-transparent max-w-40">
                                20% discounts
                            </p>

                            <p className="flex items-center gap-1 mt-4 cursor-pointer">
                                View more
                                <ArrowRight
                                    size={18}
                                    className="transition-all duration-300 group-hover:ml-2"
                                />
                            </p>
                        </div>

                        <img
                            src={assets.hero_product_img2}
                            alt="Discount Product"
                            className="w-35 object-contain"
                        />
                    </div>
                </div>
            </div>

            <CategoriesMarquee />
        </div>
    )
}

export default Hero;