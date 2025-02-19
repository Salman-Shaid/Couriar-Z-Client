import Lottie from "lottie-react";
import { FaShippingFast, FaShieldAlt, FaMapMarkedAlt, FaGlobe, FaBoxOpen, FaQuestionCircle } from "react-icons/fa";
import deliveryAnimation from "../../assets/lottie/delivary1.json";
import deliveryAnimation2 from "../../assets/lottie/delivary3.json";

const AboutUs = () => {
    return (
        <div className="dark:bg-gray-900 dark:text-white">
            <div className=" max-w-7xl mx-auto px-6 py-16 text-gray-800">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
                        About Us
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Transforming parcel delivery with speed, security, and seamless tracking.
                        We believe in hassle-free shipping that meets the demands of the modern world.
                    </p>
                </div>

                {/* Company Overview Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white flex items-center">
                            <FaShippingFast className="mr-2 text-blue-500" /> Delivering Excellence
                        </h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            Our parcel management system is built to <strong>simplify</strong> and <strong>accelerate</strong> the delivery
                            process. Whether you’re sending a small package or a large shipment, we ensure a
                            <strong>smooth, secure, and fast</strong> delivery experience.
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            Backed by innovative <strong>real-time tracking</strong>, a professional <strong>delivery network</strong>, and an
                            easy-to-use platform, we connect senders with trusted delivery professionals.
                        </p>
                    </div>
                    {/* Lottie Animation */}
                    <div className="flex justify-center">
                        <Lottie animationData={deliveryAnimation} className="w-80 h-80 md:w-96 md:h-96" />
                    </div>
                </div>

                {/* Our Features Section */}
                <div className="mt-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center">
                        🌟 Why Choose Us?
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-300 mt-2 text-lg">
                        The features that set us apart from the rest.
                    </p>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature Card */}
                        {[
                            {
                                title: "Ultra-Fast Delivery",
                                description: "We ensure that your packages arrive on time, every time with our optimized logistics.",
                                icon: <FaShippingFast className="text-blue-600 dark:text-blue-400 text-4xl mx-auto" />,
                            },
                            {
                                title: "Secure Handling",
                                description: "Your parcels are handled with care and precision, ensuring maximum security.",
                                icon: <FaShieldAlt className="text-green-600 dark:text-green-400 text-4xl mx-auto" />,
                            },
                            {
                                title: "Real-Time Tracking",
                                description: "Stay updated with our real-time parcel tracking, ensuring full transparency.",
                                icon: <FaMapMarkedAlt className="text-purple-600 dark:text-purple-400 text-4xl mx-auto" />,
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                {feature.icon}
                                <h3 className="text-2xl font-bold mt-4">{feature.title}</h3>
                                <p className="mt-3 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Mission Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               
                    <div className="flex justify-center">
                        <Lottie animationData={deliveryAnimation2} className="w-80 h-80 md:w-96 md:h-96" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white flex items-center">
                            <FaGlobe className="mr-2 text-yellow-500" /> Our Mission
                        </h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            We aim to <strong>revolutionize the logistics industry</strong> by offering a <strong>seamless, transparent, and efficient</strong> parcel management system.
                            Our goal is to <strong>bridge the gap</strong> between senders and delivery professionals, ensuring that every package reaches its destination safely.
                        </p>
                    </div>
                </div>
                
                {/* FAQ Section */}
            <div className="mt-16 text-gray-900 dark:text-white">
                <h2 className="text-4xl  font-extrabold  text-center">
                    <FaQuestionCircle className="inline-block mr-2 text-yellow-500" /> Frequently Asked Questions
                </h2>
                <div className="mt-8 w-full space-y-4 w-full max-w-3xl mx-auto">
                    <div className="collapse collapse-plus ">
                        <input type="radio" name="faq" defaultChecked />
                        <div className="collapse-title text-xl font-medium">How fast is the delivery?</div>
                        <div className="collapse-content">
                            <p>We offer ultra-fast delivery, ensuring your package arrives on time, every time.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus ">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-xl font-medium">Is my package secure?</div>
                        <div className="collapse-content">
                            <p>Yes! We ensure secure handling of all parcels with our trusted delivery network.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus ">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-xl font-medium"> What areas do you cover??</div>
                        <div className="collapse-content">
                            <p>We offer nationwide delivery, with plans to expand to international shipping soon. Check our service availability by entering your location during booking.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus ">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-xl font-medium"> Is my package safe during transit?</div>
                        <div className="collapse-content">
                            <p>Absolutely! We prioritize secure handling and work with trusted delivery professionals to ensure that your package is delivered safely and in perfect condition.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus ">
                        <input type="radio" name="faq" />
                        <div className="collapse-title text-xl font-medium">Can I track my parcel in real-time?</div>
                        <div className="collapse-content">
                            <p>Absolutely! Our real-time tracking system allows you to monitor your package’s journey.</p>
                        </div>
                    </div>
                </div>
            </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center">
                        <FaBoxOpen className="mr-2 text-red-500" /> Experience Seamless Parcel Delivery
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">
                        Join thousands of satisfied users and experience hassle-free parcel booking today.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;
