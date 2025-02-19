import Container from "../Container";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../../assets/images/logo.png"; // Add your logo path

const Footer = () => {
  return (
    <div className="bg-blue-900 dark:bg-gray-900 text-white mx-auto p-10 shadow-sm transition-colors duration-300">
      <Container>
        <footer className="grid sm:grid-cols-1 md:grid-cols-4 gap-6">

          {/* Logo & About */}
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="w-40 " />
            </Link>
            <p className="text-gray-300 text-sm">
              We deliver top-notch services <br /> to help you grow your brand and reach new heights.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h6 className="text-lg font-bold mb-3">Our Services</h6>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-yellow-400 transition">Parcel Pickup</Link></li>
            
              <li><Link to="#" className="hover:text-yellow-400 transition">International Delivery</Link></li>
              <li><Link to="#" className="hover:text-yellow-400 transition">Real-Time Tracking</Link></li>
              <li><Link to="#" className="hover:text-yellow-400 transition">Secure Packaging</Link></li>
            </ul>
          </div>


          {/* Company Section */}
          <div>
            <h6 className="text-lg font-bold mb-3">Company</h6>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
              <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
              <li><Link to="#" className="hover:text-yellow-400 transition">Press Kit</Link></li>
            </ul>
          </div>

          {/* Newsletter Subscription & Social Media */}
          <div>
            <h6 className="text-lg font-bold mb-3">Stay Updated</h6>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form>
              <div className="flex items-center bg-gray-800 rounded-lg p-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent outline-none text-white placeholder-gray-400 px-2"
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg text-white transition">
                  Subscribe
                </button>
              </div>
            </form>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <Link to="#" className="text-gray-400 hover:text-yellow-400 transition">
                <FaFacebookF size={18} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-yellow-400 transition">
                <FaTwitter size={18} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-yellow-400 transition">
                <FaInstagram size={18} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-yellow-400 transition">
                <FaLinkedinIn size={18} />
              </Link>
            </div>
          </div>

        </footer>

        {/* Bottom Footer */}
        <div className="text-center text-lg text-gray-300 mt-6 border-t border-gray-700 pt-4 ">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </Container>
    </div>
  );
};

export default Footer;
