const companies = [
    { name: "Avenue Packs", image: "/images/avenue-packs.png" },
    { name: "Avenue Buildcon", image: "/images/avenue-buildcon.png" },
    { name: "Agrovan India", image: "/images/agrovan-india.png" },
    { name: "Agrovan Farm", image: "/images/agrovan-farm.png" },
    { name: "Avenue Corporation", image: "/images/avenue-corporation.png" },
    { name: "Sarvesh Petroleum", image: "/images/sarvesh-petroleum.png" },
    { name: "La Ruche Food Stuffs", image: "/images/la-ruche.png" },
    { name: "Avenue Foundation", image: "/images/avenue-foundation.png" }
  ];
  
  const Companies = () => {
    return (
      <section className="py-16 bg-gray-900 text-white px-6 md:px-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Companies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="bg-[#5825A6] p-6 rounded-lg shadow-lg hover:scale-105 transition">
                <img src={company.image} alt={company.name} className="h-20 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">{company.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Companies;
  