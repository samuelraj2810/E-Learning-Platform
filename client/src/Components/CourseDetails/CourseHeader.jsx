import axios from "axios";
import React from "react";

const CourseHeader = ({
  title,
  description,
  instructor,
  duration,
  price,
  originalPrice,
  mediaSrc,
  userId, // Pass the logged-in user's ID as a prop
}) => {
  const handlePayment = async () => {
    try {
      // Step 1: Create Order
      const { data } = await axios.post("http://localhost:3000/payment/order", {
        amount: price,
        userId,
      });

      if (!data?.order) {
        alert("Failed to create payment order. Please try again.");
        return;
      }

      const { id: order_id, amount, currency } = data.order;

      // Step 2: Open Razorpay Checkout
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Use REACT_APP_
        amount: amount,
        currency: currency,
        name: "E-Learning Platform",
        description: `Payment for ${title}`,
        image: "",
        order_id: order_id,
        handler: async (response) => {
          // Step 3: Verify Payment
          const paymentData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };

          try {
            const verifyResponse = await axios.post(
              "http://localhost:3000/payment/verify",
              paymentData
            );

            if (verifyResponse.data.success) {
              alert("Payment successful!");
            } else {
              alert("Payment verification failed!");
            }
          } catch (error) {
            console.error("Payment verification error:", error.response?.data || error.message);
            alert("An error occurred during payment verification.");
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        notes: {
          course_name: title,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error.response?.data || error.message);
      alert("An error occurred during the payment process. Please try again.");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h1>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm text-gray-600">Instructor: {instructor}</span>
        <span className="text-sm text-gray-600">Duration: {duration}</span>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-semibold text-gray-800">
            ₹ {price}
          </span>
          <span className="text-sm text-gray-600 line-through">
            ₹ {originalPrice}
          </span>
        </div>
        <div>
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            onClick={handlePayment}
          >
            Buy Now
          </button>
        </div>
      </div>

      <div className="mt-6">
        <video controls className="w-full h-64 mb-4">
          <source src={mediaSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default CourseHeader;
