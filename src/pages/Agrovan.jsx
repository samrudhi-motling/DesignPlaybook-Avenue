import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Agrovan = () => {
  const heroImages = [
    "/images/36.jpg",
    "/images/42.jpg",
    "/images/48.jpg",
    "/images/54.jpg",
    "/images/60.jpg",
  ];

  const frescoProducts = [
    {
      id: 1,
      name: "Fresh Pomegranate",
      image: "/images/43.jpg",
      description: "Nature’s jewels, packed with vibrant ruby-red arils bursting with sweet-tart flavor.",
    },
    {
      id: 2,
      name: "Kesar and Alphonso Mangoes",
      image: "/images/44.jpg",
      description: "Celebrated for their golden hue and heavenly aroma, a true taste of India’s summer.",
    },
    {
      id: 3,
      name: "Fresh Banana G9",
      image: "/images/45.jpg",
      description: "Naturally sweet and energy-packed, perfect for a quick snack or healthy breakfast.",
    },
    {
      id: 4,
      name: "Fresh Green Chillies",
      image: "/images/46.jpg",
      description: "Add a fiery kick to your dishes with Agrovan’s Fresh Green Chillies.",
    },
    {
      id: 5,
      name: "Beet Root (vacuum pouches)",
      image: "/images/47.jpg",
      description: "Retains its earthy sweetness and nutrients, perfect for salads, juices, or roasts.",
    },
  ];

  const frozynProducts = [
    {
      id: 1,
      name: "Whole Sweet Corn on Cobs",
      image: "/images/49.jpg",
      description: "Farm-fresh taste, ready to grill, steam, or enjoy straight from the freezer.",
    },
    {
      id: 2,
      name: "Mix Vegetables (3-Way)",
      image: "/images/50.jpg",
      description: "A vibrant trio of beans, carrots, and peas, prepped for quick and wholesome meals.",
    },
    {
      id: 3,
      name: "Spinach Chopped",
      image: "/images/51.jpg",
      description: "Perfect for curries, pastas, or a healthy twist to your dishes.",
    },
    {
      id: 4,
      name: "Red Papaya Dices",
      image: "/images/52.jpg",
      description: "Rich in tropical sweetness, ideal for desserts, smoothies, or snacking.",
    },
    {
      id: 5,
      name: "Pineapple Dices",
      image: "/images/53.jpg",
      description: "Juicy and tangy, perfect for fruit salads, pizzas, or cocktails.",
    },
  ];

  const canzoProducts = [
    {
      id: 1,
      name: "Jalapenos",
      image: "/images/55.jpg",
      description: "Add a bold, tangy kick to pizzas, burgers, and nachos.",
    },
    {
      id: 2,
      name: "Beet Root",
      image: "/images/56.jpg",
      description: "Ready-to-eat, offering earthy sweetness and vibrant color to your salads, sides, or juices.",
    },
    {
      id: 3,
      name: "Alphonso Mango Pulp",
      image: "/images/57.jpg",
      description: "Captures the essence of India’s finest mangoes, ideal for desserts and shakes.",
    },
    {
      id: 4,
      name: "Custard Apple Pulp",
      image: "/images/58.jpg",
      description: "A creamy delight, perfect for smoothies, ice creams, or unique desserts.",
    },
    {
      id: 5,
      name: "Whole Strawberry",
      image: "/images/59.jpg",
      description: "Brings the luscious taste of ripe strawberries to your desserts and breakfasts.",
    },
  ];

  const biteFusionProducts = [
    {
      id: 1,
      name: "Frozen Corn Cheese Balls",
      image: "/images/61.jpg",
      description: "Crispy on the outside and bursting with creamy corn and cheese goodness inside.",
    },
    {
      id: 2,
      name: "Frozen Corn Dum Biryani",
      image: "/images/62.jpg",
      description: "A gourmet treat crafted with aromatic spices and premium corn.",
    },
    {
      id: 3,
      name: "Frozen Corn Samosa",
      image: "/images/63.jpg",
      description: "A savory indulgence with a flaky crust and deliciously spiced corn filling.",
    },
    {
      id: 4,
      name: "Frozen Franky Chapati",
      image: "/images/64.jpg",
      description: "Combines convenience with taste, offering a wholesome and flavorful snack.",
    },
    {
      id: 5,
      name: "Frozen Fries & Cheese Sauce",
      image: "/images/65.jpg",
      description: "Crispy fries paired with indulgently creamy cheese sauce.",
    },
  ];

  const spicixProducts = [
    {
      id: 1,
      name: "Green Chilly Flakes",
      image: "/images/67.jpg",
      description: "Delivers a punch of spice, ideal for sprinkling over pizzas, pastas, or marinades.",
    },
    {
      id: 2,
      name: "Coriander Leaves Powder",
      image: "/images/68.jpg",
      description: "Brings the aroma of freshly picked herbs to every dish.",
    },
    {
      id: 3,
      name: "Tomato Powder",
      image: "/images/69.jpg",
      description: "Adds instant tanginess to soups, sauces, and curries.",
    },
    {
      id: 4,
      name: "Curry Leaves Powder",
      image: "/images/70.jpg",
      description: "A fragrant blend that brings the essence of traditional Indian cooking.",
    },
    {
      id: 5,
      name: "Pomegranate Seed Powder",
      image: "/images/71.jpg",
      description: "Combines convenience and nutrition, perfect for baking or smoothies.",
    },
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#120620] to-[#664384]">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="w-full h-full"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                  >
                    <h1 className="text-6xl font-bold text-[#e8e8ea] mb-4">Agrovan</h1>
                    <p className="text-2xl text-[#eca051]">
                      Healthy Farmers. Healthy Families.
                    </p>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* About Us Section */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <div
          className="relative rounded-lg shadow-lg overflow-hidden"
          style={{
            backgroundImage: `url('/images/879.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "400px",
          }}
        >
          <div className="absolute inset-0 bg-[#120620] bg-opacity-60"></div>
          <div className="relative z-10 bg-[#664384] bg-opacity-80 rounded-lg m-8 p-8">
            <h2 className="text-4xl font-bold text-[#eca051] mb-6">About Us</h2>
            <p className="text-[#e8e8ea] text-lg mb-4">
              At <span className="font-semibold">Agrovan</span>, we are committed to transforming the agricultural landscape by empowering farmers and delivering high-quality, sustainable products to consumers worldwide.
            </p>
            <p className="text-[#e8e8ea] text-lg mb-4">
              With over <span className="font-semibold">6,000 farmers</span> and <span className="font-semibold">12,000 acres</span> of agricultural land under our partnership, we leverage cutting-edge technology and sustainable practices to ensure the highest standards of quality and consistency.
            </p>
            <p className="text-[#e8e8ea] text-lg mb-4">
              Our vision is to be the <span className="font-semibold">heartline of farmers</span> while providing a platform for consumers to embrace a healthier, happier lifestyle.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Fresco Products Section */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="text-3xl font-bold text-[#eca051] mb-6 text-center">Fresco Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {frescoProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 relative group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#eca051] mb-2 text-center">{product.name}</h3>
                <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <div className="text-white text-center">
                    <p className="text-lg font-semibold">{product.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Frozyn Products Section */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="text-3xl font-bold text-[#eca051] mb-6 text-center">Frozyn Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {frozynProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 relative group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#eca051] mb-2 text-center">{product.name}</h3>
                <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <div className="text-white text-center">
                    <p className="text-lg font-semibold">{product.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Canzo Products Section */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="text-3xl font-bold text-[#eca051] mb-6 text-center">Canzo Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {canzoProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 relative group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#eca051] mb-2 text-center">{product.name}</h3>
                <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <div className="text-white text-center">
                    <p className="text-lg font-semibold">{product.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* BiteFusion Products Section */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="text-3xl font-bold text-[#eca051] mb-6 text-center">BiteFusion Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {biteFusionProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 relative group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#eca051] mb-2 text-center">{product.name}</h3>
                <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <div className="text-white text-center">
                    <p className="text-lg font-semibold">{product.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Spicix Products Section */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <h2 className="text-3xl font-bold text-[#eca051] mb-6 text-center">Spicix Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {spicixProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 relative group"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#eca051] mb-2 text-center">{product.name}</h3>
                <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <div className="text-white text-center">
                    <p className="text-lg font-semibold">{product.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Visit Original Site Button */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mt-12 pb-12"
      >
        <a
          href="https://www.agrovanindia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#eca051] text-[#120620] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e8e8ea] transition duration-300"
        >
          Visit Original Site
        </a>
      </motion.div>
    </div>
  );
};

export default Agrovan;