import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [sessionDetails, setSessionDetails] = useState(null);

  useEffect(() => {
    const fetchSessionDetails = async () => {
      if (sessionId) {
        try {
          const response = await fetch(`http://localhost:3000/checkout-session/${sessionId}`);
          const data = await response.json();
          setSessionDetails(data);
        } catch (error) {
          console.error("Error fetching session details:", error);
        }
      }
    };
    fetchSessionDetails();
  }, [sessionId]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-semibold text-green-600">Payment Successful!</h1>
      <p className="text-gray-700 mt-2">Thank you for your purchase.</p>
      {sessionDetails && (
        <div className="mt-4 p-4 border rounded-lg bg-white shadow">
          <h2 className="text-lg font-medium">Order Summary</h2>
          <p className="text-gray-600">Session ID: {sessionDetails.id}</p>
          <p className="text-gray-600">Customer Email: {sessionDetails.customer_email}</p>
          <p className="text-gray-600">Amount: ${sessionDetails.amount_total / 100}</p>
        </div>
      )}
      <button
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => window.location.href = "/"}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Success;
