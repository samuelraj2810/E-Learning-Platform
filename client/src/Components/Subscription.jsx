import React from "react";
import axios from "axios";

const Subscription = () => {
  const handleSubscription = async () => {
    try {
      const { data } = await axios.post("/api/create-order", {
        amount: 500, // Amount in INR (₹500 as an example)
      });

      const options = {
        key: "your_razorpay_key_id", // Your Razorpay Key ID
        amount: data.amount,
        currency: data.currency,
        name: "Your Platform Name",
        description: "Subscription Payment",
        order_id: data.orderId,
        handler: async (response) => {
          // Verify payment on server
          const verifyData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };

          try {
            const verifyResponse = await axios.post(
              "/api/verify-payment",
              verifyData
            );
            if (verifyResponse.data.success) {
              alert("Payment successful!");
            } else {
              alert("Payment verification failed.");
            }
          } catch (err) {
            console.error("Verification Error:", err);
          }
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Subscribe to Premium Access</h1>
      <p className="mb-4">Get unlimited access to all courses.</p>
      <button
        onClick={handleSubscription}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Subscribe Now
      </button>
    </div>
  );
};

export default Subscription;
