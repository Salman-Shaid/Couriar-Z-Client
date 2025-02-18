import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../../components/Form/CheckoutForm';  // Import the CheckoutForm component

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const PayParcel = () => {
  const { id } = useParams();
  const [parcelDetails, setParcelDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchParcelDetails = async () => {
      try {
        const response = await axiosSecure.get(`/parcel-pay/${id}`);
        setParcelDetails(response.data);

        // Fetch clientSecret for Stripe PaymentIntent
        const paymentIntentResponse = await axiosSecure.post('/api/payments/create-payment-intent', {
          amount: response.data.price,
          currency: 'usd',
        });

        setClientSecret(paymentIntentResponse.data.clientSecret);
      } catch (error) {
        setError(error.response ? error.response.data.message : 'Failed to fetch parcel details');
      } finally {
        setLoading(false);
      }
    };

    fetchParcelDetails();
  }, [id]);

  if (loading) return <div>Loading parcel details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!parcelDetails) return <div>No parcel details found</div>;

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Parcel Payment</h2>

      <div className="card shadow-xl p-6">
        <h3 className="card-title text-xl font-bold">Parcel Details</h3>
        <div className="space-y-4">
          <p><span className="font-medium">Parcel ID:</span> {id}</p>
          <p><span className="font-medium">Parcel Type:</span> {parcelDetails.parcelType}</p>
          <p><span className="font-medium">Weight:</span> {parcelDetails.parcelWeight} kg</p>
          <p><span className="font-medium">Receiver:</span> {parcelDetails.receiverName}</p>
          <p><span className="font-medium">Delivery Address:</span> {parcelDetails.deliveryAddress}</p>
          <p><span className="font-medium">Price:</span> ${parcelDetails.price}</p>
        </div>

        {clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm parcelDetails={parcelDetails} clientSecret={clientSecret} />
          </Elements>

        )}
      </div>
    </div>
  );
};

export default PayParcel;
