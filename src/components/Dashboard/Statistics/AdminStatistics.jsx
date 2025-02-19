import { VscCodeReview } from "react-icons/vsc";
import { FaDollarSign } from 'react-icons/fa';
import { TbBrandBooking } from "react-icons/tb";
import ApexCharts from 'react-apexcharts';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import { RiUserSearchLine } from "react-icons/ri";

const AdminStatistics = () => {
  const axiosSecure = useAxiosSecure();

  const { data: statData, isLoading } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const { data } = await axiosSecure('/admin-stat');
      return data;
    },
  });

  const { totalBookings, totalUsers, totalReviews, totalPayment } = statData || {};

  if (isLoading) return <LoadingSpinner />;

  // Bar Chart: Revenue & Bookings Over Time
  const revenueChart = {
    series: [
      {
        name: 'Total Revenue ($)',
        data: [1000, 2500, 3500, 4500, 5200, 6000, totalPayment || 0], // Example revenue data
      },
      {
        name: 'Total Bookings',
        data: [5, 15, 25, 40, 55, 70, totalBookings || 0], // Example bookings data
      },
    ],
    options: {
      chart: { type: 'bar', height: 350 },
      plotOptions: { bar: { borderRadius: 5, horizontal: false } },
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
      title: { text: 'Revenue & Bookings Over Time', align: 'center' },
    },
  };

  // Line Chart: User & Review Growth
  const growthChart = {
    series: [
      {
        name: 'Total Users',
        data: [10, 25, 40, 60, 80, 100, totalUsers || 0], // Example users data
      },
      {
        name: 'Total Reviews',
        data: [2, 10, 20, 35, 50, 65, totalReviews || 0], // Example reviews data
      },
    ],
    options: {
      chart: { type: 'line', height: 350 },
      stroke: { width: 3, curve: 'smooth' },
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
      title: { text: 'User & Review Growth', align: 'center' },
    },
  };

  return (
    <div className="mt-16 ">
      {/* Stat Cards */}
      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Revenue */}
        <div className="bg-blue-500 dark:bg-gray-800 text-white p-6 rounded-xl shadow-md flex flex-col items-center">
          <FaDollarSign className="w-12 h-12 mb-2" />
          <p className="text-lg">Total Revenue</p>
          <h4 className="text-2xl font-semibold">${totalPayment || 0}</h4>
        </div>

        {/* Total Bookings */}
        <div className="bg-green-500 dark:bg-gray-800 text-white p-6 rounded-xl shadow-md flex flex-col items-center">
          <TbBrandBooking className="w-12 h-12 mb-2" />
          <p className="text-lg">Total Bookings</p>
          <h4 className="text-2xl font-semibold">{totalBookings}</h4>
        </div>

        {/* Total Reviews */}
        <div className="bg-purple-500 dark:bg-gray-800 text-white p-6 rounded-xl shadow-md flex flex-col items-center">
          <VscCodeReview className="w-12 h-12 mb-2" />
          <p className="text-lg">Total Reviews</p>
          <h4 className="text-2xl font-semibold">{totalReviews}</h4>
        </div>

        {/* Total Users */}
        <div className="dark:bg-gray-800 bg-orange-500 text-white p-6 rounded-xl shadow-md flex flex-col items-center">
          <RiUserSearchLine className="w-12 h-12 mb-2" />
          <p className="text-lg">Total Users</p>
          <h4 className="text-2xl font-semibold">{totalUsers}</h4>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2 mt-20">
        {/* Revenue & Bookings Chart */}
        <div className="bg-white dark:bg-gray-500  p-6 rounded-xl shadow-md">
          <ApexCharts options={revenueChart.options} series={revenueChart.series} type="bar" height={350} />
        </div>

        {/* User & Review Growth Chart */}
        <div className="bg-white dark:bg-gray-500  p-6 rounded-xl shadow-md">
          <ApexCharts options={growthChart.options} series={growthChart.series} type="line" height={350} />
        </div>
      </div>
    </div>
  );
};

export default AdminStatistics;
