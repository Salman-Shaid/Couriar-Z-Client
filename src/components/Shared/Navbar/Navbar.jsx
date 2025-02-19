import Container from '../Container';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import avatarImg from '../../../assets/images/placeholder.jpg';
import logo from '../../../assets/images/logo.png';
import Lottie from 'lottie-react';
// import notificationAnimation from '../../../assets/lottie/notifation bell.json';
import menuAnimation from '../../../assets/lottie/menu.json';
import useTheme from '../../../hooks/useTheme';
import { Moon, Sun } from 'lucide-react'; // Import Icons

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <div className="fixed w-full bg-blue-900 dark:bg-gray-900 z-10 shadow-sm transition-colors duration-300">
      <div className="border-b-[1px] border-gray-500">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <div className='w-48 '>
              <Link to="/">
                <img className="w-30 h-24" src={logo} alt="logo" />
              </Link>
            </div>



            {/* Center Navigation */}
            <div className="hidden md:flex gap-6">
              <Link
                to="/"
                className={`font-semibold transition pb-2 ${location.pathname === "/"
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "text-white hover:text-gray-300"
                  }`}
              >
                Home
              </Link>

              <Link
                to="/services"
                className={`font-semibold transition pb-2 ${location.pathname === "/services"
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "text-white hover:text-gray-300"
                  }`}
              >
                Our Services
              </Link>

              <Link
                to="/about"
                className={`font-semibold transition pb-2 ${location.pathname === "/about"
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "text-white hover:text-gray-300"
                  }`}
              >
                About Us
              </Link>



              

              {user && (
                <>
                  <Link
                    to="/contact"
                    className={`font-semibold transition pb-2 ${location.pathname === "/contact"
                      ? "text-yellow-400 border-b-2 border-yellow-400"
                      : "text-white hover:text-gray-300"
                      }`}
                  >
                    Contact
                  </Link>

                  <Link
                    to="/dashboard"
                    className={`font-semibold transition pb-2 ${location.pathname === "/dashboard"
                      ? "text-yellow-400 border-b-2 border-yellow-400"
                      : "text-white hover:text-gray-300"
                      }`}
                  >
                    Dashboard
                  </Link>
                </>
              )}
            </div>




            <div className="flex items-center gap-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="relative w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition"
                aria-label="Toggle Dark Mode"
              >
                <div
                  className={`w-6 h-6 flex items-center justify-center bg-white dark:bg-black rounded-full shadow-md transition-transform ${theme === "dark" ? "translate-x-6" : "translate-x-0"
                    }`}
                >
                  {theme === "dark" ? <Moon size={16} color="white" /> : <Sun size={16} color="black" />}
                </div>
              </button>

              {/* Dropdown Menu */}
              <div className="relative">
                <div className="flex flex-row items-center gap-3">
                  {/* Dropdown Button */}
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-1 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                  >

                    <div className="hidden md:block">
                      {/* Avatar */}
                      <img
                        className="rounded-full"
                        referrerPolicy="no-referrer"
                        src={user && user.photoURL ? user.photoURL : avatarImg}
                        alt="profile"
                        height="36"
                        width="36"
                      />
                    </div>
                    <div className="w-8  h-8">
                      <Lottie animationData={menuAnimation} loop={true} />
                    </div>
                  </div>
                </div>

                {isOpen && (
                  <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-blue-900 dark:bg-gray-800 overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                      {user ? (
                        <>
                          <div className="p-4 text-white text-center">

                            <h2 className="mt-2 font-semibold text-lg">{user.displayName || "User"}</h2>
                            <p className="text-gray-300 text-sm">{user.email}</p>

                          </div>
                          <div className="border-t border-gray-600"></div>
                          <Link to="/" className="block md:hidden px-4 py-2 hover:bg-gray-700 transition font-semibold text-white">
                            Home
                          </Link>
                          <Link to="/dashboard" className="px-4 py-2 hover:bg-gray-700 transition font-semibold text-white">
                            Dashboard
                          </Link>



                          <div
                            onClick={logOut}
                            className="px-4 py-3 hover:bg-gray-700 transition font-semibold cursor-pointer text-white"
                          >
                            Logout
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="p-4 text-white">Please login or sign up</div>
                          <Link to="/login" className="px-4 py-3 hover:bg-gray-700 transition font-semibold text-white">
                            Login
                          </Link>
                          <Link to="/signup" className="px-4 py-3 hover:bg-gray-700 transition font-semibold text-white">
                            Sign Up
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
