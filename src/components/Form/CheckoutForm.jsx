import PropTypes from 'prop-types'; // ✅ Import PropTypes
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const CheckoutForm = ({ parcelDetails, clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();

  const [processing, setProcessing] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      toast.error("Stripe is not loaded yet. Please try again.");
      setProcessing(false);
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      toast.error("Please enter your card details.");
      setProcessing(false);
      return;
    }

    try {
      const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      if (paymentError) {
        throw new Error(paymentError.message);
      }

      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (confirmError) {
        throw new Error(confirmError.message);
      }

      if (paymentIntent.status === 'succeeded') {
        toast.success("Payment successful! 🎉");
        setPaymentCompleted(true);

        await axiosSecure.post('/api/payments/save-payment', {
          parcelId: parcelDetails._id,
          transactionId: paymentIntent.id,
          amount: parcelDetails.price,
          status: 'Paid',
        });

        await axiosSecure.patch(`/api/parcels/${parcelDetails._id}`, {
          status: 'Paid',
        });

        
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="dark:bg-gray-900 dark:text-white space-y-4 p-4 border rounded-md shadow-md">
      <CardElement className="p-3 border rounded-md bg-white" />

      <button 
        type="submit" 
        className="btn btn-primary w-full disabled:opacity-50" 
        disabled={!stripe || processing || paymentCompleted}
      >
        {processing ? "Processing..." : paymentCompleted ? "Payment Completed" : "Pay Now"}
      </button>
    </form>
  );
};

// ✅ Define PropTypes
CheckoutForm.propTypes = {
  parcelDetails: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  clientSecret: PropTypes.string.isRequired,
};

export default CheckoutForm;
