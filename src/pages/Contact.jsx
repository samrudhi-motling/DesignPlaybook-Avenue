import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#4B0082] to-[#9370DB] text-white">
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
      </motion.div>

      {/* Background Wave - Moved Behind Content */}
      <div className="absolute bottom-0 left-0 w-full -z-10">
        <svg
          className="w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="black"
            fillOpacity="1"
            d="M0,288L48,261.3C96,235,192,181,288,170.7C384,160,480,192,576,202.7C672,213,768,203,864,181.3C960,160,1056,128,1152,106.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Contact Section */}
      <div className="relative container mx-auto px-6 py-16">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-white">Contact For Any Query</h2>
        </motion.div>

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
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
            </p>
            {[
              {
                icon: <FaMapMarkerAlt className="text-purple-800 text-2xl" />,
                title: "Office",
                text: "123 Street, New York, USA",
              },
              {
                icon: <FaPhoneAlt className="text-purple-800 text-2xl" />,
                title: "Mobile",
                text: "+012 345 67890",
              },
              {
                icon: <FaEnvelopeOpen className="text-purple-800 text-2xl" />,
                title: "Email",
                text: "info@example.com",
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
                  <p>{item.text}</p>
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

