import Hero from "@/components/shared/Hero";
import Image from "next/image";
import ProductPage from "./(main)/products/page";
import Footer from "@/components/shared/Footer";
import { FaCheckCircle, FaSun, FaWind } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";

export default function Home() {
  const summerTips = [
    {
      id: 1,
      icon: <FaSun className="text-3xl text-orange-500" />,
      title: "Apply Sunscreen",
      desc: "Be sure to use SPF 30+ sunscreen at least 15 minutes before going out in the hot sun."
    },
    {
      id: 2,
      icon: <FaDroplet className="text-3xl text-blue-500" />,
      title: "Stay Hydrated",
      desc: "Make sure to drink at least 3-4 liters of pure water every day to keep your skin and body healthy."
    },
    {
      id: 3,
      icon: <FaWind className="text-3xl text-amber-500" />,
      title: "Wear Light Clothes",
      desc: "To avoid the discomfort of heat, wear light-colored cotton clothes, which help with air circulation."
    }
  ];

  const topBrands = [
    { id: 1, name: "UV Sunglass", products: "Sunglasses Especial" },
    { id: 2, name: "BD Gajet", products: "Hydration Master" },
    { id: 3, name: "BackPack", products: "Summer Outfits & Care" },
    { id: 4, name: "Screen Care", products: " Skin Care Expert" }
  ];
  return (
    <div>
      <Hero></Hero>
      <ProductPage></ProductPage>
      <div>
        <div className="space-y-16 py-10">

          <div className="container mx-auto px-4">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="text-3xl font-black text-gray-800">Summer Care Tips ☀️</h2>
              <p className="text-sm text-gray-500 mt-2">
                Follow our special tips to keep yourself healthy and refreshed in this intense heat.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {summerTips.map(tip => (
                <div key={tip.id} className="card bg-white p-6 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center">
                  <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-4 shadow-inner">
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="container mx-auto mt-5 overflow-hidden px-4 md:px-6 my-8">
            <div className="bg-amber-50/40 py-8 md:py-12 rounded-3xl border border-amber-100/50 w-full px-4 text-center">

              <div className=" container  max-w-xl mx-auto mb-8 md:mb-10">
                <h2 className="text-2xl md:text-3xl font-black text-gray-800 flex items-center justify-center gap-2">
                  Our Top Brands 🔥
                </h2>
                <p className="text-xs md:text-sm text-gray-500 mt-2 max-w-md mx-auto">
                  The summer collections of all the world's best and premium brands are now available on our SunCart.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-full">
                {topBrands.map(brand => (
                  <div
                    key={brand.id}
                    className="card bg-white p-4 md:p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col items-center justify-center relative overflow-hidden group min-h-[110px] md:min-h-[140px] w-full"
                  >
                    <div className="absolute top-2 right-2 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <FaCheckCircle className="text-sm md:text-base" />
                    </div>

                    <h3 className="text-base sm:text-lg md:text-2xl font-black tracking-wider text-gray-700 font-serif text-center w-full break-words px-1">
                      {brand.name}
                    </h3>

                    <p className="text-[10px] md:text-xs text-gray-400 mt-1 font-medium text-center">
                      {brand.products}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
