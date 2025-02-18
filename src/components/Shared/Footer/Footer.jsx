import Container from "../Container";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-red-950 dark:bg-gray-900 text-white mx-auto p-10 shadow-sm transition-colors duration-300">
      <Container>
        <footer className="grid sm:grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Services Section */}
          <div>
            <h6 className="footer-title text-lg font-bold mb-3">Our Services</h6>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-gray-300 transition">Branding</Link></li>
              <li><Link to="#" className="hover:text-gray-300 transition">Design</Link></li>
              <li><Link to="#" className="hover:text-gray-300 transition">Marketing</Link></li>
              <li><Link to="#" className="hover:text-gray-300 transition">Advertisement</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h6 className="footer-title text-lg font-bold mb-3">Company</h6>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-gray-300 transition">About Us</Link></li>
              <li><Link to="#" className="hover:text-gray-300 transition">Contact</Link></li>
              <li><Link to="#" className="hover:text-gray-300 transition">Careers</Link></li>
              <li><Link to="#" className="hover:text-gray-300 transition">Press Kit</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h6 className="footer-title text-lg font-bold mb-3">Legal</h6>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-gray-300 transition">Terms of Use</Link></li>
              <li><Link to="#" className="hover:text-gray-300 transition">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-gray-300 transition">Cookie Policy</Link></li>
            </ul>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <Link to="#" className="text-gray-400 hover:text-white transition">
                <FaFacebookF size={18} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter size={18} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram size={18} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition">
                <FaLinkedinIn size={18} />
              </Link>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h6 className="footer-title text-lg font-bold mb-3">Stay Updated</h6>
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
                <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white">
                  Subscribe
                </button>
              </div>
            </form>
          </div>

        </footer>

        {/* Bottom Footer */}
        <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </Container>
    </div>
  );
};

export default Footer;
