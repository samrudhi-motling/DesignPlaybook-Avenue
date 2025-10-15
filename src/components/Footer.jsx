const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-6">Contact Us</h2>
          <div className="space-y-4">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-start gap-2">
                <span>📍</span>
                <div className="text-left">
                  <p>Office No: 310, R-3, Arzoo Building, 3rd floor</p>
                  <p>Near Al Qusais-2 Metro Station</p>
                  <p>Dubai 56808 - U.A.E</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span>📞</span>
              <div>
                <p>+9120-69000098</p>
                <p>+91 8888890059</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span>✉️</span>
              <p>support@avenueindia.co.in</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-6">Useful Links</h2>
          <ul className="space-y-3">
            <li>
              <a href="#about" className="hover:text-gray-300 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#companies" className="hover:text-gray-300 transition-colors">
                Companies
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-6">Subscribe</h2>
          <p className="text-sm mb-6">
            Stay updated with our latest news and updates.
          </p>
          <div className="flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded-l-md w-full max-w-xs text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 hover:bg-orange-600 p-3 rounded-r-md transition-colors">
              📩
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-12 border-t border-white/20 pt-6">
        © 2025 Avenue Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;