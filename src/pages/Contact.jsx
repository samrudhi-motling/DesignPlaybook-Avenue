import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from "react-icons/fa";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline"; // Import the down arrow icon

const ContactPage = () => {
  // Function to handle scroll down
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight, // Scrolls down by one viewport height
      behavior: "smooth", // Enables smooth scrolling
    });
  };

  return (
    <div
      className="relative text-white"
      style={{
        backgroundImage: "url('/images/444.jpg')", // Local background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Optional: Makes the background fixed while scrolling
      }}
    >
      {/* Hero Section */}
      <motion.div
        className="relative bg-cover bg-center h-[400px] flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('/images/contact.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#5825A6]/60 to-black/80"></div>
        <motion.h1
          className="text-6xl font-extrabold tracking-wide relative z-10"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-gray-300 mt-3 text-lg relative z-10"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Get in touch with us for any queries or collaborations.
        </motion.p>

        {/* Scroll Down Arrow */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={handleScrollDown} // Add click handler to scroll down
        >
          <ChevronDownIcon className="h-8 w-8 sm:h-10 sm:w-10 text-white opacity-80 hover:opacity-100 transition duration-300" />
        </motion.div>
      </motion.div>

      {/* Contact Section */}
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Google Map */}
          <motion.iframe
            className="rounded-lg w-full h-72"
            src="https://www.google.com/maps/embed?..."
            allowFullScreen={true}
            aria-hidden="false"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.iframe>

          {/* Contact Form */}
          <motion.form
            className="bg-black p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-900 text-white px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-900 text-white px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-gray-900 text-white px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-white"
                required
              />
              <textarea
                placeholder="Message"
                className="w-full bg-gray-900 text-white px-4 py-3 rounded-md outline-none h-32 resize-none focus:ring-2 focus:ring-white"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white py-3 rounded-md text-black font-semibold hover:bg-gray-300 transition-all"
              >
                Send Message
              </button>
            </div>
          </motion.form>

          {/* Contact Details */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h5 className="text-xl font-semibold">Get In Touch</h5>
            <p className="text-gray-300">
              Reach out to us for any inquiries or business collaborations.
            </p>
            {[
              {
                icon: <FaMapMarkerAlt className="text-purple-800 text-2xl" />,
                title: "Office",
                text: "Office No : 310, R-3, Arzoo Building, 3rd floor Near Al Qusais -2 Metro Station Dubai 56808- U.A.E",
              },
              {
                icon: <FaPhoneAlt className="text-purple-800 text-2xl" />,
                title: "Phone",
                text: "+91 8888890059\n+9120-69000098",
              },
              {
                icon: <FaEnvelopeOpen className="text-purple-800 text-2xl" />,
                title: "Email",
                text: "support@avenueindia.co.in",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="bg-white p-4 rounded-full flex items-center justify-center w-12 h-12">
                  {item.icon}
                </div>
                <div>
                  <h5 className="text-white text-lg font-semibold">
                    {item.title}
                  </h5>
                  <p className="text-gray-300 whitespace-pre-line">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default ContactPage;