import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { motion } from 'framer-motion';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';

const TopDeliveryMans = () => {
    const [deliveryMen, setDeliveryMen] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const fetchTopDeliveryMen = async () => {
            try {
                const response = await axiosSecure.get('/deliveryMen/top');
                setDeliveryMen(response.data);
            } catch (error) {
                setError(error.response ? error.response.data.message : 'Failed to fetch delivery men');
            } finally {
                setLoading(false);
            }
        };

        fetchTopDeliveryMen();
    }, []);

    if (loading) return <LoadingSpinner />;
    if (error) return <div className="text-center text-red-500 py-10">Error: {error}</div>;

    return (
        <div className="dark:bg-gray-900 dark:text-white">
            <div className="container mx-auto px-4 py-36">
                {/* Section Header */}
                <div className="mb-10">
                    <h2 className="text-5xl font-bold text-center mb-5 text-gray-800 dark:text-white">
                        Our Top Delivery Men
                    </h2>
                    <p className="text-lg text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Meet our most reliable and hardworking delivery personnel who ensure your parcels reach their 
                        destination on time, every time. Their dedication and efficiency make them the backbone of our service.
                    </p>
                </div>

                {/* Delivery Men Cards */}
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                >
                    {deliveryMen.map((deliveryMan) => (
                        <motion.div
                            key={deliveryMan._id}
                            className="card dark:bg-gray-800 py-20 shadow-lg rounded-lg p-6 border transition-all duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="avatar flex justify-center mb-4">
                                <div className="w-2/4 rounded-full border-4 border-gray-300 dark:border-gray-700 overflow-hidden">
                                    <img 
                                        src={deliveryMan.image || '/default-avatar.png'} 
                                        alt={deliveryMan.name} 
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-3xl mb-2 font-semibold">{deliveryMan.name}</h3>
                                <p className="text-gray-600 dark:text-gray-400">Email: {deliveryMan.email}</p>
                                <p className="text-yellow-500 mb-2 text-2xl font-bold mt-2">
                                    Average Rating: {deliveryMan.averageRating?.toFixed(1)} ⭐
                                </p>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Parcels Delivered: {deliveryMan.totalReviews}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TopDeliveryMans;
