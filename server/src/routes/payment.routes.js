const express = require('express');
const Stripe = require('stripe');
const stripe = Stripe("sk_test_51Qg1M4GCzgYKCEZbEgytiEe5CUzjQxDxnZwWsZX0SbjxqzmZ3j6daBfTEY0KyI9YXx0d3gRhfehdqCzZF4yYFZSt00bcEjp21D"); // Replace with your secret key
const {verifyToken} = require("../middleware/authToken")
const router = express.Router();

router.post('/create-checkout-session', verifyToken ,async (req, res) => {
  try {
    const {  price } = req.body;
    console.log(req.body);
    

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: 'Course:',  // Use course details here
            },
            unit_amount: price * 100,  // Stripe requires the amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `http://localhost:3001/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3001/cancel`,
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/checkout-session/:sessionId', async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.retrieve(req.params.sessionId);
      res.json(session);
    } catch (error) {
      console.error("Error retrieving session:", error);
      res.status(500).json({ error: error.message });
    }
  });
  

module.exports=router