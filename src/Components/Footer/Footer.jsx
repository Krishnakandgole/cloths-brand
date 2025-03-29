import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-sm text-gray-400">
            We are a premium clothing brand focused on delivering the best styles and quality to our customers.
          </p>
        </div>
        
        {/* Help Center */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Help Center</h2>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-white">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white">Men's Fashion</a></li>
            <li><a href="#" className="hover:text-white">Women's Fashion</a></li>
            <li><a href="#" className="hover:text-white">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white">Best Sellers</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-5">
        &copy; {new Date().getFullYear()} Clothing Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
