import bannerBg from "../../../assets/images/banner.png";

const Banner = () => {
    return (
        <div
            className="bg-cover bg-center h-[1200px]" 
            style={{ backgroundImage: `url(${bannerBg})` }}
        >
            <div className="flex flex-col items-center justify-center h-full text-center text-white px-4 bg-gray-950 bg-opacity-40 
            dark:bg-opacity-85  dark:text-white">
                <h1 className="text-3xl sm:text-5xl lg:text-8xl font-bold leading-tight">
                    Welcome to Courier-Z
                </h1>
                <p className="mt-4 text-sm sm:text-lg lg:text-xl max-w-3xl">
                    Your trusted partner for fast, secure, and reliable deliveries. From packages to parcels, 
                    <br className="hidden lg:block" /> we deliver with care and precision—every time, everywhere.
                </p>
                <div className="mt-6 flex flex-col md:flex-row items-center w-full max-w-lg space-y-3 md:space-y-0 md:space-x-3">
                    <input
                        type="text"
                        placeholder="Enter tracking number or destination"
                        className="input input-bordered w-full md:flex-grow py-3 px-4 rounded-md bg-blue-900 border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="btn btn-primary bg-yellow-500 hover:bg-yellow-600 text-white w-full md:w-auto py-3 px-6 font-semibold rounded-md">
                        Track Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
