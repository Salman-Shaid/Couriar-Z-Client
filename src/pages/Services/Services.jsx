import { FaShippingFast, FaGlobe, FaMapMarkedAlt, FaBoxes, FaTruckLoading, FaHandHoldingUsd } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import bannerB from "../../assets/images/Red And Pink Modern Home Delivery Services Facebook Ad.png";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div className="bg-white dark:text-white dark:bg-gray-900">
            <div className="container mx-auto p-6 ">
                {/* Header Section */}
                <div
                    className="text-center bg-cover bg-center bg-no-repeat py-20"
                    style={{ backgroundImage: `url(${bannerB})` }}
                >
                    <h1 className="text-6xl font-bold text-blue-900 drop-shadow-lg">Our Courier Services</h1>
                    <p className="text-lg text-blue-700 mt-2 max-w-2xl mx-auto drop-shadow-md">
                        Fast, secure, and reliable parcel delivery for businesses and individuals. Ship locally and globally with confidence.
                    </p>
                </div>

                {/* Service List */}
                <div className="grid md:grid-cols-3 gap-8 mt-12 text-black">
                    {/* Same-Day Delivery */}
                    <div className="p-6 shadow-lg rounded-lg bg-white dark:bg-gray-600 dark:text-white text-center border border-gray-200 hover:shadow-xl transition">
                        <FaShippingFast className="text-yellow-500 text-4xl mx-auto mb-3" />
                        <h2 className="text-xl font-bold ">Same-Day Delivery</h2>
                        <p className=" mt-2">Urgent delivery within the city. Get your package delivered the same day.</p>
                    </div>

                    {/* Express Shipping */}
                    <div className="p-6 shadow-lg rounded-lg bg-white text-center border dark:bg-gray-600 text-black dark:text-white border-gray-200 hover:shadow-xl transition">
                        <MdOutlineLocalShipping className="text-yellow-500 text-4xl mx-auto mb-3" />
                        <h2 className="text-xl font-bold ">Express Shipping</h2>
                        <p className=" mt-2">Fast and secure nationwide shipping with a 24-48 hour guarantee.</p>
                    </div>

                    {/* International Shipping */}
                    <div className="p-6 shadow-lg rounded-lg bg-white text-center border border-gray-200 hover:shadow-xl transition dark:bg-gray-600 dark:text-white">
                        <FaGlobe className="text-yellow-500 text-4xl mx-auto mb-3" />
                        <h2 className="text-xl font-bold ">International Shipping</h2>
                        <p className=" mt-2">Global delivery with real-time tracking and customs clearance.</p>
                    </div>

                    {/* Package Tracking */}
                    <div className="p-6 shadow-lg rounded-lg bg-white text-center border border-gray-200 hover:shadow-xl transition dark:bg-gray-600 dark:text-white">
                        <FaMapMarkedAlt className="text-yellow-500 text-4xl mx-auto mb-3" />
                        <h2 className="text-xl font-bold ">Live Package Tracking</h2>
                        <p className="mt-2">Track your parcel in real-time with our advanced tracking system.</p>
                    </div>

                    {/* Bulk Shipping */}
                    <div className="p-6 shadow-lg rounded-lg bg-white text-center border border-gray-200 hover:shadow-xl transition dark:bg-gray-600 dark:text-white">
                        <FaBoxes className="text-yellow-500 text-4xl mx-auto mb-3" />
                        <h2 className="text-xl font-bold ">Bulk & Business Shipping</h2>
                        <p className=" mt-2">Affordable courier solutions for businesses with volume discounts.</p>
                    </div>

                    {/* Doorstep Pickup */}
                    <div className="p-6 shadow-lg rounded-lg bg-white text-center border border-gray-200 hover:shadow-xl transition dark:bg-gray-600 dark:text-white">
                        <FaTruckLoading className="text-yellow-500 text-4xl mx-auto mb-3" />
                        <h2 className="text-xl font-bold ">Doorstep Pickup</h2>
                        <p className=" mt-2">We pick up your package from your location for hassle-free shipping.</p>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="mt-16 p-8 bg-white dark:bg-gray-700 dark:text-white text-black rounded-lg text-center">
                    <h2 className="text-3xl font-bold mb-6 text-black dark:text-yellow-500">How It Works</h2>

                    <div className="grid md:grid-cols-4 gap-6">
                        {/* Step 1: Book a Pickup */}
                        <div className="p-6 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-600 hover:shadow-xl transition">
                            <FaMapMarkedAlt className="text-blue-700 dark:text-yellow-400 text-5xl mx-auto mb-3" />
                            <h3 className="text-xl font-semibold">1. Book a Pickup</h3>
                            <p className="text-sm mt-2">Schedule a pickup from your home or office through our app or website.</p>
                        </div>

                        {/* Step 2: Package Collection */}
                        <div className="p-6 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-600 hover:shadow-xl transition">
                            <FaTruckLoading className="text-blue-700 dark:text-yellow-400 text-5xl mx-auto mb-3" />
                            <h3 className="text-xl font-semibold">2. We Collect It</h3>
                            <p className="text-sm mt-2">Our courier will arrive at the scheduled time to pick up your package.</p>
                        </div>

                        {/* Step 3: Real-Time Tracking */}
                        <div className="p-6 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-600 hover:shadow-xl transition">
                            <FaGlobe className="text-blue-700 dark:text-yellow-400 text-5xl mx-auto mb-3" />
                            <h3 className="text-xl font-semibold">3. Track Your Shipment</h3>
                            <p className="text-sm mt-2">Use our tracking system to monitor your package in real time.</p>
                        </div>

                        {/* Step 4: Fast & Secure Delivery */}
                        <div className="p-6 shadow-lg rounded-lg bg-gray-100 dark:bg-gray-600 hover:shadow-xl transition">
                            <FaShippingFast className="text-blue-700 dark:text-yellow-400 text-5xl mx-auto mb-3" />
                            <h3 className="text-xl font-semibold">4. Delivery at Your Door</h3>
                            <p className="text-sm mt-2">Your package arrives safely at the destination—fast and secure.</p>
                        </div>
                    </div>
                </div>


                {/* Why Choose Us? */}
                <div className="mt-16 p-8 bg-gray-100 dark:bg-gray-600 dark:text-white text-black rounded-lg text-center">
                    <h2 className="text-3xl font-bold  mb-4">Why Choose Courier-Z?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex items-center space-x-3">
                            <FaHandHoldingUsd className="text-yellow-500 text-3xl" />
                            <p className="text-lg ">Affordable Rates & No Hidden Fees</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <RiCustomerService2Fill className="text-yellow-500 text-3xl" />
                            <p className="text-lg ">24/7 Customer Support</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaMapMarkedAlt className="text-yellow-500 text-3xl" />
                            <p className="text-lg ">Real-Time Tracking & Updates</p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">Need Assistance?</h2>
                    <p className="text-lg text-gray-600">
                        Contact our customer support for inquiries or shipping assistance.
                    </p>
                    <Link to="/contact">
                        <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-700 transition">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
