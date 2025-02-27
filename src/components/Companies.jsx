import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const Companies = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      modules: [EffectCards],
      effect: "cards",
      grabCursor: true,
      initialSlide: 2,
      speed: 500,
      loop: true,
      rotate: true,
      mousewheel: {
        invert: false,
      },
    });
  }, []);

  const companies = [
    { name: "Avenue Packs", img: "/images/0.jpg" },
    { name: "Agrovan India", img: "/images/0.jpg" },
    { name: "Avenue Corporation", img: "/images/0.jpg" },
    { name: "La Ruche Food Stuffs", img: "/images/0.jpg" },
    { name: "Avenue Buildcon", img: "/images/0.jpg" },
    { name: "Agrovan Farm Producing Company", img: "/images/0.jpg" },
    { name: "Sarvesh Petroleum - Sarvesh Petro Hub", img: "/images/0.jpg" },
    { name: "Avenue Foundation", img: "/images/0.jpg" }
  ];

  return (
    <section className="flex justify-center items-center bg-gray-900 min-h-screen p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 shadow-lg flex flex-col md:flex-row gap-8 w-full max-w-4xl min-h-[500px]">
        <div className="max-w-md text-center md:text-center flex flex-col justify-center">
          <p className="text-white text-lg mb-4">
            Discover our diverse portfolio of <span className="text-purple-500 font-bold">Avenue Group Companies</span> spanning various industries. From hospitality and real estate to agriculture and security, our companies are committed to excellence, innovation, and delivering exceptional value to our clients and communities.
          </p>
          <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-bold shadow hover:bg-gray-200">
            Learn More
          </button>
        </div>

        <div className="swiper w-64 h-[450px]">
          <div className="swiper-wrapper">
            {companies.map((company, index) => (
              <div key={index} className="swiper-slide relative rounded-lg overflow-hidden shadow-lg">
                <img src={company.img} alt={company.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
                  <h2 className="text-white font-semibold text-lg mt-2">{company.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
